import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Quiz from './quiz';

class Question extends Model {
  public id!: number;
  public content!: string;
  public quizId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Question.init(
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
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Quiz,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Question',
    tableName: 'questions',
  }
);

Question.belongsTo(Quiz, { foreignKey: 'quizId' });
Quiz.hasMany(Question, { foreignKey: 'quizId' });

export default Question;
