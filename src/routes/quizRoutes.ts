import { Router } from 'express';
import QuizController from '../controllers/quizController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Quizzes
 *   description: API endpoints for managing quizzes
 */

/**
 * @swagger
 * /api/quizzes:
 *   post:
 *     summary: Create a new quiz
 *     tags: [Quizzes]
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
 *     tags: [Quizzes]
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
 *     tags: [Quizzes]
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
 *     tags: [Quizzes]
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
 *     tags: [Quizzes]
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

/**
 * @swagger
 * /api/quizzes/{userId}/{quizId}:
 *   post:
 *     summary: Take a quiz and get the score
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *       - in: path
 *         name: quizId
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
 *               answers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     answerId:
 *                       type: integer
 *                       format: int64
 *                     isCorrect:
 *                       type: boolean
 *     responses:
 *       '200':
 *         description: Quiz taken successfully
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Internal Server Error
 */
router.post('/quizzes/:userId/:quizId', QuizController.takeQuiz);

/**
 * @swagger
 * /api/leaderboard:
 *   get:
 *     summary: Get the leaderboard of quiz scores
 *     tags: [Quizzes]
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '500':
 *         description: Internal Server Error
 */
router.get('/leaderboard', QuizController.getLeaderboard);

/**
 * @swagger
 * /api/leaderboard/{quizId}:
 *   get:
 *     summary: Get the leaderboard for a specific quiz
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '500':
 *         description: Internal Server Error
 */
router.get('/leaderboard/:quizId', QuizController.getQuizLeaderboard);  // New route

/**
 * @swagger
 * /api/quizzes/{id}/qr:
 *   get:
 *     summary: Generate QR code for a quiz
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       '200':
 *         description: QR code generated successfully
 *       '500':
 *         description: Internal Server Error
 */
router.get('/quizzes/:id/qr', QuizController.generateQuizQR); // New route for generating QR code

export default router;
