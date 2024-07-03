import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Question from './question';

class Answer extends Model {
  public id!: number;
  public content!: string;
  public isCorrect!: boolean;
  public questionId!: number;
}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    questionId: {
      type: DataTypes.INTEGER,
      references: {
        model: Question,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: 'answers'
  }
);

Question.hasMany(Answer, { foreignKey: 'questionId' });
Answer.belongsTo(Question, { foreignKey: 'questionId' });

export default Answer;