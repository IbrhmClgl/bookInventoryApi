import { Router } from 'express';
import { getAllBooks, createBook } from '../controllers/bookControllers';

const router = Router();

router.get('/books', getAllBooks);
router.post('/books', createBook);

export default router;
