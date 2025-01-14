import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

export class Book extends Model {
  public id!: number;
  public title!: string;
  public author!: string;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'books',
  }
);

export const getBooks = async (): Promise<Book[]> => {
  return await Book.findAll();
};

export const addBook = async (book: Partial<Book>): Promise<Book> => {
  return await Book.create(book);
};

