import { Request, Response } from 'express';
import { BookService } from '../services/bookService';
import { Book } from '../models/book';

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const books = await BookService.getBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Abrufen der Bücher' });
  }
};

export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, author } = req.body;
  if (!title || !author) {
    res.status(400).json({ error: 'Fehlende Buchdetails' });
    return;
  }

  try {
    const newBook: Book = { title, author };
    const createdBook = await BookService.addBook(newBook);
    res.status(201).json(createdBook);
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Erstellen des Buches' });
  }
};
