import mysql, { ResultSetHeader, RowDataPacket } from "mysql2/promise"
import env from "dotenv"
env.config()

export interface BOOK extends RowDataPacket{
  BookID : number,
  BookName : string,
  QuantityInStock : number,
  Barcode : string | null,
  Price : string,
  Description : string | null,
  PublishDate : string | null
  Size : string,
  PublisherID : string | null  
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
    const [rows] = await db.query<BOOK[]>('SELECT * FROM BOOK')
    // console.log(rows)
    //This will run just when start
    return rows
  } catch (err){
    console.error(`Initiate Connection Fail: `, err)
  }
}

checkConnection()

export const query = <T extends RowDataPacket[] | ResultSetHeader>(text: string, params?:any[]) => db.query<T>(text,params)