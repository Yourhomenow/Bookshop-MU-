import { bookData, query } from "../db";

export interface convertedBookData {
  book_id : string,
  book_name : string,
  create_at : string
}

export const getBooks = async (): Promise<convertedBookData[]> =>{
  const [rows] = await query<bookData[]>(`SELECT * FROM book`)
  const data = rows.map((row)=> {
    return {...row,
            book_id: row.book_id.toString('hex')}
  })
  
  console.log("From client service: ", data)
  return data
}