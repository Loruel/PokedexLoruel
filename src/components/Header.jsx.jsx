import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='h-20'>

            <Link to={'/'}>
            <figure className='h-20 ml-4'>
                <img className='h-20' src="./logopoke.png" alt="" />
            </figure>
            </Link>
                    
        </div>
    )
}
