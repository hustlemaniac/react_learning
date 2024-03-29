import { useState } from 'react'

import grid from '/images/photo-grid.png';

export default function Navbar() {
    return (
        <section className="hero">
            <img src={grid} alt="grid" className='section--grid'/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.
            </p>
        </section>

    )
}