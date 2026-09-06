import express from 'express'
import cors from 'cors'
import clientRouter from './routes/clientRoute'


const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.use(`/api`,clientRouter)

app.listen(port, ()=>{
  console.log("Listening on port 3000")
})