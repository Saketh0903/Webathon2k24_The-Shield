import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'

function Cards() {
    let [books,setBooks]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/books")
        .then((res)=>res.json())
        .then((data)=>setBooks(data))
        .catch((err)=>console.log(err))
    },[])
    console.log(books)
  return (
    <div className="container">

        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {
                books.map((element)=>{
                    return(
                        <div className="col" id={element.title}>
                            <Card data={element} />
                        </div>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Cards
