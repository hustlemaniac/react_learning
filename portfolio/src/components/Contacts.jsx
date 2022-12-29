import { useState } from 'react'
import emaillogo from './images/Icon@2x.png';
import linkedinlogo from './images/linkedin.png';

export default function Contacts() {
    return (
        <nav>
            <div className='emailDiv'>
                <img src={emaillogo} alt="Logo" className='email--icon'/>
                <a href="mailto: bhavyasaikamasamudram@gmail.com?" className='email'>Email</a>
            </div>
            <div className='linkedinDiv'>
                <img src={linkedinlogo} alt="Logo" className='linkedin--icon'/>
                <a href="https://www.linkedin.com/in/bhavya-sai-kamasamudram-b6b44b177/" target="_blank" className='linkedin'>LinkedIn</a>
            </div>
        </nav>
    )
}