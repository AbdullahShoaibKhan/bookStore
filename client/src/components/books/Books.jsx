import React,{useEffect, useState} from "react";
import Book from "../book/Book";
const URL= "https://cryptic-oasis-24684.herokuapp.com/books";

const initialvalue={
    _id:"",
    Author:"",
    Genre:"",
    BookName:"",
    Desc:"",
    Price:"",
    PublishedBy:""
}

const fetchHandler= async()=>{
    return await fetch(URL).then((res)=>(res.json()));
}
const Books=()=>{
    const [books,setBooks]=useState(initialvalue);

    useEffect(()=>{
            // console.log('inside useEffect')
           fetchHandler().then((data)=> setBooks(data));

        },[setBooks]);
        
        const {book=[""]}=books;
        // console.log(typeof(book),book,"2");
        // console.log(books);
return <div className="container">
            <>{book.map((book,i)=>(
                    <li key={i}>
                        <Book book={book}/>
                    </li>
                ))
            }</>
    </div>;
}
export default Books;