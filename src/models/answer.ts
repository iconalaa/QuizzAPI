import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Question from './question';

class Answer extends Model {
  public id!: number;
  public content!: string;
  public isCorrect!: boolean;
  public questionId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Question,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Answer',
    tableName: 'answers',
  }
);

Answer.belongsTo(Question, { foreignKey: 'questionId' });
Question.hasMany(Answer, { foreignKey: 'questionId' });

export default Answer;
