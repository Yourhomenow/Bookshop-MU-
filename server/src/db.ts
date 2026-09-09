import mysql, { QueryValues, RowDataPacket } from "mysql2/promise"
import env from "dotenv"
env.config()

export interface bookData extends RowDataPacket {
  book_id : Buffer,
  book_name : string,
  create_at : string
}

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: Number(process.env.MYSQL_PORT)
})

const checkConnection = async () => {
  try {  
    const [rows] = await db.query<bookData[]>('SELECT * FROM book')
    // console.log(rows)
    // console.log(rows[0].book_id.toString('hex'))
    //This will run just when start
    return rows
  } catch (err){
    console.error(`Initiate Connection Fail: `, err)
  }
}

checkConnection()

export const query = <T extends RowDataPacket[]>(text: string, params?:any[]) => db.query<T>(text,params)