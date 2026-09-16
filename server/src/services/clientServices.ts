import { ResultSetHeader } from "mysql2";
import { BOOK, query } from "../db/db";


// export interface BOOK extends RowDataPacket{
//   BookID : number,
//   BookName : string,
//   QuantityInStock : number,
//   Barcode : string | null,
//   Price : string,
//   Description : string | null,
//   PublishDate : string | null
//   Size : string,
//   PublisherID : string | null  
// }



export const getBooks = async (): Promise<BOOK[]> =>{
  const [rows] = await query<BOOK[]>(`SELECT * FROM BOOK`)
  return rows
}


export const createBook = async (bookData : BOOK) => {
  const {BookName, QuantityInStock, Barcode, Price, Description, PublishDate, Size, PublisherID} =  bookData
  const values = [
    BookName,
    QuantityInStock,
    Barcode,
    Price,
    Description,
    PublishDate,
    Size,
    PublisherID
  ]
  const [row] = await query(
    `INSERT INTO BOOK (BookName, QuantityInStock, Barcode, Price, Description, PublishDate, Size, PublisherID)
    VALUES (?)`,[values]
  )
  return row
}

// export const updateBook = async (bookData : BOOK) => {
//   const {BookName, QuantityInStock, Barcode, Price, Description, PublishDate, Size, PublisherID} =  bookData
//   const values = [
//     BookName,
//     QuantityInStock,
//     Barcode,
//     Price,
//     Description,
//     PublishDate,
//     Size,
//     PublisherID
//   ]
//   const [row] = await query(
//     `INSERT INTO BOOK (BookName, QuantityInStock, Barcode, Price, Description, PublishDate, Size, PublisherID)
//     VALUES (?)`,[values]
//   )
//   return row
// }

export const deleteBook = async (bookId : string) => {
  const [row] = await query<ResultSetHeader>(
    `DELETE FROM BOOK
    WHERE BookID = ?`, [bookId])
  console.log("Full row object:", row)
  return row.affectedRows > 0
} 