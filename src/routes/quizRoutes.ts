
import { Router } from 'express';
import QuizController from '../controllers/quizController';

const router = Router();

router.post('/quizzes', QuizController.createQuiz);
router.get('/quizzes', QuizController.getQuizzes);
router.get('/quizzes/:id', QuizController.getQuizById);
router.put('/quizzes/:id', QuizController.updateQuiz);
router.delete('/quizzes/:id', QuizController.deleteQuiz);

export default router;
