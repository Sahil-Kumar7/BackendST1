import express from 'express';
import { addBook,bookList,oneBook,updateBook,deleteBook} from '../Controllers/bookController.js';

const route = express.Router();

route.post('/books',addBook);
route.get('/books',bookList);
route.get('/books/:id',oneBook)
route.put('/books/:id',updateBook);
route.delete('/books/:id',deleteBook);
// route.get('/books',searchBook);

export default route;