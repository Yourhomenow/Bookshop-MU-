import express, {type Express, type Request, type Response } from 'express'
import * as clientController from "../controllers/clientController"

const router = express.Router()

router.get(`/books`, clientController.getBooks)

router.post(`/books`, clientController.createBook)

router.delete(`/books/:id`, clientController.deleteBook)


export default router;