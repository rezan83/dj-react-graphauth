import React from 'react'
import './Card.scss'
import img from './img_avatar.png'

export function Card() {

    return(
        <div className="card">
        <img src={img} alt="Avatar" />
            <div className="container">
                <h4><b>card name</b></h4>
                <p>card desc</p>
            </div>
        </div> 
    )
}
