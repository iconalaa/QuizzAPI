import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Quiz from './quiz'; // Ensure Quiz model is imported

class Question extends Model {
  public id!: number;
  public content!: string;
  public quizId!: number;
}

Question.init(
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
    quizId: {
      type: DataTypes.INTEGER,
      references: {
        model: Quiz,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: 'questions'
  }
);


Quiz.hasMany(Question, { foreignKey: 'quizId' });
Question.belongsTo(Quiz, { foreignKey: 'quizId' });

export default Question;