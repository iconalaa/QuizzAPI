import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Quiz extends Model {
  public id!: number;
  public title!: string;
}

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'quizzes'
  }
);

export default Quiz;