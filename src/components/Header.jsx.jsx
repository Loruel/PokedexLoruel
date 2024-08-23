import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='h-20 flex w-full'>

            <div className='flex w-full'>
                <figure className='h-20 ml-4'>
                    <Link to={'/'}>
                        <img className='h-20' src="./logopoke.png" alt="" />
                    </Link>
                </figure>
            </div>
            <div className='w-full flex justify-end items-center'>
                <button className='font-semibold w-20 h-10 mr-4 rounded-xl flex justify-center items-center bg-[#3b5ca8]'>
                    <p className='text-[#ffcb05]'>Login</p>
                    <img src="login.svg" alt="" />
                </button>
            </div>



        </div>
    )
}
