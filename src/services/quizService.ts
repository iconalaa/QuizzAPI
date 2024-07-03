
import Quiz from '../models/quiz';
import Question from '../models/question';
import Answer from '../models/answer';

class QuizService {
  public async createQuiz(data: any): Promise<Quiz> {
    const { title, questions } = data;
    
    const quiz = await Quiz.create({ title });

    for (const questionData of questions) {
      const { content, answers } = questionData;

      const question = await Question.create({
        content,
        quizId: quiz.id
      });

      if (answers) {
        for (const answerData of answers) {
          await Answer.create({
            content: answerData.content,
            isCorrect: answerData.isCorrect,
            questionId: question.id
          });
        }
      }
    }

    return quiz;
  }

  public async getQuizzes(): Promise<Quiz[]> {
    return await Quiz.findAll({
      include: {
        model: Question,
        include: [Answer]
      }
    });
  }

  public async getQuizById(id: number): Promise<Quiz | null> {
    return await Quiz.findByPk(id, {
      include: {
        model: Question,
        include: [Answer]
      }
    });
  }

  public async updateQuiz(id: number, data: any): Promise<Quiz | null> {
    const quiz = await Quiz.findByPk(id);
    if (!quiz) {
      return null;
    }

    const { title, questions } = data;
    await quiz.update({ title });

    if (questions) {
      for (const questionData of questions) {
        const { id: questionId, content, answers } = questionData;

        let question;
        if (questionId) {
          question = await Question.findByPk(questionId);
          if (question) {
            await question.update({ content });
          }
        } else {
          question = await Question.create({
            content,
            quizId: quiz.id
          });
        }

        if (answers && question) { // Add null check for question here
          for (const answerData of answers) {
            const { id: answerId, content, isCorrect } = answerData;

            if (answerId) {
              const answer = await Answer.findByPk(answerId);
              if (answer) {
                await answer.update({ content, isCorrect });
              }
            } else {
              await Answer.create({
                content,
                isCorrect,
                questionId: question.id
              });
            }
          }
        }
      }
    }

    return quiz;
  }

  public async deleteQuiz(id: number): Promise<boolean> {
    const quiz = await Quiz.findByPk(id);
    if (!quiz) {
      return false;
    }

    await quiz.destroy();
    return true;
  }
}

export default new QuizService();
