import Quiz from './quiz';
import Question from './question';
import Answer from './answer';

// Ensure relationships are established
Quiz.hasMany(Question, { foreignKey: 'quizId' });
Question.belongsTo(Quiz, { foreignKey: 'quizId' });

Question.hasMany(Answer, { foreignKey: 'questionId' });
Answer.belongsTo(Question, { foreignKey: 'questionId' });

export { Quiz, Question, Answer };
