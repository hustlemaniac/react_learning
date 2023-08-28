import { useState } from 'react'

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
import cardImg from './images/katie-zaferes.png';
import star from './images/star.png';
export default function Card() {
    return (
        <div className='card'>
            <img src={cardImg} alt="cardImg" className='card--logo'/>
            {/* <img src="./images/katie-zaferes.png" /> */}
            <div className='card-stats'>
                <img src={star} alt="star" className='rating-star'/>
                <span>5.0</span>
                <span style={{color: "#918E9B"}}>(6) • </span>
                <span style={{color: "#918E9B"}}>USA</span>
            </div>
            <p>Life Lesson with Katie Zaferes</p>
            <div className='card-price'>
                <span><b>From $136 </b> </span>
                <span>/ person</span>
            </div>

        </div>
        
    )
}