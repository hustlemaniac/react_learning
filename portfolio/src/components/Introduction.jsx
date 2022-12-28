import { useState } from 'react'

// import backlogo from './images/react-icon-large.png';

export default function Introduction() {
    return (
        <header>
            {/* insert profile picture */}
            {/* <img src={backlogo} alt="Logo" className='main--icon'/> */}
            <h1 className='header--name'>Kamasamudram Bhavya Sai</h1>
            <h4 className='header--profession'>Cloud Security Engineer</h4>
            <ul className='header--contacts'>
                <li>Email</li>
                <li>LinkedIn</li>
            </ul>
        </header>
    )
}