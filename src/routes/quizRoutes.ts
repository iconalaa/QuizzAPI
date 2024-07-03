import { Router } from 'express';
import QuizController from '../controllers/quizController';

const router = Router();

/**
 * @swagger
 * /api/quizzes:
 *   post:
 *     summary: Create a new quiz
 *     tags:
 *       - Quizzes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     content:
 *                       type: string
 *                     answers:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           content:
 *                             type: string
 *                           isCorrect:
 *                             type: boolean
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad Request
 */
router.post('/quizzes', QuizController.createQuiz);

/**
 * @swagger
 * /api/quizzes:
 *   get:
 *     summary: Retrieve all quizzes
 *     tags:
 *       - Quizzes
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '404':
 *         description: No quizzes found
 */
router.get('/quizzes', QuizController.getQuizzes);

/**
 * @swagger
 * /api/quizzes/{id}:
 *   get:
 *     summary: Retrieve a quiz by ID
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '404':
 *         description: Quiz not found
 */
router.get('/quizzes/:id', QuizController.getQuizById);

/**
 * @swagger
 * /api/quizzes/{id}:
 *   put:
 *     summary: Update a quiz by ID
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       format: int64
 *                     content:
 *                       type: string
 *                     answers:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             format: int64
 *                           content:
 *                             type: string
 *                           isCorrect:
 *                             type: boolean
 *     responses:
 *       '200':
 *         description: Updated successfully
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Quiz not found
 */
router.put('/quizzes/:id', QuizController.updateQuiz);

/**
 * @swagger
 * /api/quizzes/{id}:
 *   delete:
 *     summary: Delete a quiz by ID
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       '204':
 *         description: Quiz deleted successfully
 *       '404':
 *         description: Quiz not found
 */
router.delete('/quizzes/:id', QuizController.deleteQuiz);

export default router;
