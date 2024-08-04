import Score from '../models/score';
import { sequelize } from '../config/database'; 

class ScoreService {
  public async recordScore(userId: number, quizId: number, score: number): Promise<void> {
    await Score.create({ userId, quizId, score });
  }

  public async getLeaderboard(): Promise<any[]> {
    const leaderboard = await Score.findAll({
      attributes: ['userId', [sequelize.fn('sum', sequelize.col('score')), '"totalScore"']], // Quote the alias here
      group: ['userId'],
      order: [[sequelize.literal('"totalScore"'), 'DESC']], // Quote the alias here as well
    });

    return leaderboard.map((entry: any) => ({
      userId: entry.userId,
      totalScore: entry.dataValues.totalScore, // Access using the exact alias
    }));
  }

  public async getQuizLeaderboard(quizId: number): Promise<any[]> {
    const leaderboard = await Score.findAll({
      where: { quizId },
      attributes: ['userId', [sequelize.fn('sum', sequelize.col('score')), '"totalScore"']], // Quote the alias here
      group: ['userId'],
      order: [[sequelize.literal('"totalScore"'), 'DESC']], // Quote the alias here as well
    });

    return leaderboard.map((entry: any) => ({
      userId: entry.userId,
      totalScore: entry.dataValues.totalScore, // Access using the exact alias
    }));
  }
}

export default new ScoreService();
