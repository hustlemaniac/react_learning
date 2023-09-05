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
// import cardImg from './images/katie-zaferes.png';
import star from '/images/star.png';
export default function Card(props) {
    // let badgeText
    // if (props.openSpots === 0) {
    //     badgeText = "SOLD OUT"
    // } else if (props.location === "Online") {
    //     badgeText = "ONLINE"
    // }
    // {badgeText === 0 && <div className="card--badge">{badgeText}</div>}
    return (
        <div className='card'>
            {/* conditional rendering, sold out badge if the element has 0 openspots */}
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`../images/${props.coverImg}`} alt="cardImg" className='card--logo'/>
            {/* <img src="./images/katie-zaferes.png" /> */}
            <div className='card-stats'>
                <img src={star} alt="star" className='rating-star'/>
                <span>{props.stats.rating}</span>
                <span style={{color: "#918E9B"}}>({props.stats.reviewCount}) • </span>
                <span style={{color: "#918E9B"}}>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <div className='card-price'>
                <span><b>From ${props.price} </b> </span>
                <span>/ person</span>
            </div>

        </div>
        
    )
}