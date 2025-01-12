import { Request, Response } from 'express';
import { getBooks, addBook, deleteBook } from '../services/bookService';
import { Book } from '../models/book';

export const getAllBooks = (req: Request, res: Response): void => {
  res.json(getBooks());
};

export const createBook = (req: Request, res: Response): void => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    res.status(400).json({ error: 'Missing book details' });
    return;
  }

  const newBook: Book = { ...req.body, id: new Date().toISOString() };
  addBook(newBook);
  res.status(201).json(newBook);
};

export const removeBook = (req: Request, res: Response): void => {
  const { id } = req.params;
  deleteBook(id);
  res.status(204).send();
};
