import * as clientService from "../services/clientServices"
import express, {type Request, type Response } from 'express'

export const getBooks = async (req: Request, res: Response)=>{
  try{
    const book = await clientService.getBooks();
    res.status(200).json(book)
  }catch(err){
    console.error(`Error Fetching client`, err)
    res.status(500).json({message: "Internal server error, Can't get book"})
  }
}

export const createBook = async (req: Request, res: Response) => {
  try{
    const bookData = req.body;
    const newBook = await clientService.createBook(bookData)
    res.status(200).json(newBook)
  }catch (err){
    console.log('Error Adding book: ',err);
    res.status(500).json({message: "Internal Server Error"})
  }
}