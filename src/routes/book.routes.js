import {Router} from 'express'
import * as bookCtrl from '../controllers/book.controllers.js'


const router = Router()

router.get('/', bookCtrl.findAllBook);

router.post('/', bookCtrl.createBook);

router.get('/done', bookCtrl.findAllDoneBook);

router.get('/:id', bookCtrl.findOneBook);

router.delete('/:id', bookCtrl.deleteBook);

router.put("/:id", bookCtrl.updateBook);

export default router;