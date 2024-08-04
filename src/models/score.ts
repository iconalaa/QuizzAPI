import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import User from './user';
import Quiz from './quiz';

class Score extends Model {
  public id!: number;
  public userId!: number;
  public quizId!: number;
  public score!: number;
}

Score.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Quiz,
        key: 'id',
      },
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Score',
    tableName: 'scores',
  }
);

export default Score;