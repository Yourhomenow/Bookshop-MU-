
import '../App.css'
import {
  Link,
} from "react-router-dom";
import NavBar from '../components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

export interface BOOK {
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

function Home() {
  const [books, setBooks] = useState<BOOK[]>([])

  useEffect(()=>{
    const fetchAllBooks = async ()=>{
      try{
        const res = await axios.get("http://localhost:3000/api/books/")
        setBooks(res.data)
        // console.log(res)
      }catch(err){
        console.log(err)
      }
    }

    fetchAllBooks()
  },[])



  return (
    <>
      <NavBar/>
      <div className='flex gap-2 flex-wrap p-3 w-full'>
        {books.map((book)=>{
          return (
            <Link key={book.BookID} to={`/book/${book.BookID}`}>
              <div key={book.BookID} className="card bg-base-100 w-40 shadow-sm  min-w-40 cursor-pointer hover:scale-102 hover:shadow-lg transition-transform duration-300 ease-out">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1519764340700-3db40311f21e?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Shoes" 
                    className='h-40 object-cover'
                  />
                </figure>
                <div className="card-body h-40 p-3.5">
                  <h2 className="card-title text-xs">{book.BookName}</h2>
                  <p className='text-[0.5rem] wrap-normal line-clamp-4'>{book.Description}</p>
                  <h3 className='text-[0.7rem] font-medium text-[rgb(58,120,71)]'>
                    {`${book.Price} ฿`}
                  </h3>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary px-2 py-[0.3rem] h-[1.6rem] text-[0.6rem]">Buy Now</button>
                  </div>
                </div>
              </div>
            </Link>
          )
        })
        }
      </div>
      <Footer/>
      <Link className='btn bg-primary' to="/ourteam">Our team</Link> 
    </>
  )
}

export default Home
