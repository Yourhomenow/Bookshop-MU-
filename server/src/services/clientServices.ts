import { query } from "../db";

type bookData = {
  book_id : string,
  book_name : string,
  create_at : string
}

export const getBooks = async () =>{
  const [rows] = await query(`SELECT * FROM book`)
  console.log(rows)
  return rows
}