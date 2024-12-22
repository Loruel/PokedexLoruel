import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Navigation from './pages/Navigation'
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'
import SearchPage from './pages/SearchPage'
import LoginPage from './pages/LoginPage'
import CreateAcountPage from './pages/CreateAcountPage'

export default function AppRoutes() {
    return (
        
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<HomePage />} />
                <Route path='pokemon/:id' element={<PokemonPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='createacount' element={<CreateAcountPage />} />
            </Route>
            
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>

    )
}

