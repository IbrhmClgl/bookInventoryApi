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
