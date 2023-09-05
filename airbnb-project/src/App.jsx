import React from "react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from "./components/Card"
import data from './data'
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

    export default function App() {

    const cards = data.map(item => {
    return (

        <Card 
        // to uniquely identify jsx elements
            key = {item.id}
            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots = {item.openSpots}

            // pass object as prop
            // item = {item}
            // then in card.jsx, the data is retrieved as props.item.key

            // spread object as props
            {...item}
            // the data is retrieved as props.key
        />
    )
    })        

    return (
    <div>
        <Navbar/>
        <Hero />
        <section className="cards-list">
                {cards}
            </section>
    </div>
    )
    }
