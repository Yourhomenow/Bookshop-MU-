import * as clientService from "../services/clientServices"
import express, {type Request, type Response } from 'express'

export const getClients = async (req: Request, res: Response)=>{
  try{
    const client = await clientService.getBooks();
    res.status(200).json(client)
  }catch(err){
    console.error(`Error Fetching client`, err)
    res.status(500).json({message: "Internal server error"})
  }
}