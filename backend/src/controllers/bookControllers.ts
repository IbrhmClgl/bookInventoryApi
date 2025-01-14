import { Request, Response } from 'express';
import { getBooks, addBook } from '../services/bookService';

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  const books = await getBooks();
  res.json(books);
};

export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, author } = req.body;
  if (!title || !author) {
    res.status(400).json({ error: 'Missing book details' });
    return;
  }

  const newBook = await addBook({ title, author });
  res.status(201).json(newBook);
};
