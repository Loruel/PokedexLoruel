import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='h-20 flex w-full dark:bg-[#3b3b3b]'>

            <div className='flex w-full'>
                <figure className='h-20 ml-4 lg:ml-10'>
                    <Link to={'/'}>
                        <img className='h-20 lg:h-36 lg:-mt-8' src="./logopoke.png" alt="" />
                    </Link>
                </figure>
            </div>
            <div className='w-full flex justify-end items-center lg:mr-10'>
                <button className='font-semibold w-20 h-10 mr-4 rounded-xl flex justify-center items-center bg-[#3b5ca8] lg:w-36 lg:h-14'>
                    <p className='text-[#ffcb05] lg:text-'>Login</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffcb05" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>

                </button>
            </div>



        </div>
    )
}
