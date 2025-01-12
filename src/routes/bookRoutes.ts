import { Router } from 'express';
import {
  getAllBooks,
  createBook,
  removeBook,
} from '../controllers/bookControllers';

const router = Router();

router.get('/books', getAllBooks);
router.post('/books', createBook);
router.delete('/books/:id', removeBook);

export default router;
