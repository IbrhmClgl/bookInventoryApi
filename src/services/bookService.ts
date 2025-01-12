import { Book } from '../models/book';

let books: Book[] = [];
let currentId = 1;

export const getBooks = (): Book[] => books;

export const addBook = (book: Book): void => {
  const bookWithId = { ...book, id: String(currentId++) };
  books.push(bookWithId);
};

export const deleteBook = (id: string): void => {
  books = books.filter((book) => book.id !== id);
};
