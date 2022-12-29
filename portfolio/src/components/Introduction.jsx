import { useState } from 'react'

import profilepic from './images/profile.jpeg';

export default function Introduction() {
    return (
        <header>
            {/* insert profile picture */}
            <img src={profilepic} alt="profilePic" className='header--picture'/>
            <h1 className='header--name'>Kamasamudram Bhavya Sai</h1>
            <h4 className='header--profession'>Cloud Security Engineer</h4>
        </header>
    )
}