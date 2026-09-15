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


// -- INSERT INTO BOOK (BookName, QuantityInStock, Price, Size)
// -- VALUES ("The Stranger", 10, 30.99 , 999)

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