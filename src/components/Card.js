import React, { useEffect, useState } from 'react'
import {Books} from './Books'
import './Card.css'

function Card(props) {
    console.log(props)
  return (
    <div className="card-wrapper">
            <div className="card">
                <img src={props.book.image} className="card-img" alt="Book cover" />
                <div className="info">
                    <p className="lead card-title">{props.book.title}</p>
                    <button className="btn btn-primary primary d-block mx-auto">
                    View Details
                </button>
                </div>
                
            </div>
        </div>

  )
}

export default Card
