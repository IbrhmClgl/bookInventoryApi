// import { DataTypes, Model } from 'sequelize';
// import sequelize from '../config/db';

// export class Book extends Model {
//   public id!: number;
//   public title!: string;
//   public author!: string;
// }

// Book.init(
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     author: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     tableName: 'books',
//   }
// );

// export const getBooks = async (): Promise<Book[]> => {
//   return await Book.findAll();
// };

// export const addBook = async (book: Partial<Book>): Promise<Book> => {
//   return await Book.create(book);
// };

import { Book } from '../models/book';
import { pool } from '../config/db';

export const BookService = {
  getBooks: async (): Promise<Book[]> => {
    const [rows] = await pool.execute('SELECT * FROM books');
    return rows as Book[];
  },

  addBook: async (book: Book): Promise<Book> => {
    const [result]: any = await pool.execute(
      'INSERT INTO books (title, author) VALUES (?, ?)',
      [book.title, book.author]
    );

    const newBook = {
      id: result.insertId,
      ...book,
    };
    return newBook;
  },
};
