import { useState } from 'react'
import memesData from "../memeData"
export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")
    function fetchImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={fetchImage()}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className='meme-image'/>
        </main>
    )
}