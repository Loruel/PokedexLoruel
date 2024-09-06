import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'


export default function Navigation() {

    return (
        <div className='bg-[#dc0a2d]'>

            <Header />

            <Outlet />

        </div>
    )
}
