
import { Request, Response } from 'express';
import QuizService from '../services/quizService';

class QuizController {
  public async createQuiz(req: Request, res: Response): Promise<void> {
    try {
      const quiz = await QuizService.createQuiz(req.body);
      res.status(201).json(quiz);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getQuizzes(req: Request, res: Response): Promise<void> {
    try {
      const quizzes = await QuizService.getQuizzes();
      res.status(200).json(quizzes);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getQuizById(req: Request, res: Response): Promise<void> {
    try {
      const quiz = await QuizService.getQuizById(parseInt(req.params.id, 10));
      if (quiz) {
        res.status(200).json(quiz);
      } else {
        res.status(404).json({ error: 'Quiz not found' });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async updateQuiz(req: Request, res: Response): Promise<void> {
    try {
      const updatedQuiz = await QuizService.updateQuiz(parseInt(req.params.id, 10), req.body);
      if (updatedQuiz) {
        res.status(200).json(updatedQuiz);
      } else {
        res.status(404).json({ error: 'Quiz not found' });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async deleteQuiz(req: Request, res: Response): Promise<void> {
    try {
      const success = await QuizService.deleteQuiz(parseInt(req.params.id, 10));
      if (success) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Quiz not found' });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default new QuizController();
