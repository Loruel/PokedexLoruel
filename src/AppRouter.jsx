import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Navigation from './pages/Navigation'
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'
import SearchPage from './pages/SearchPage'

export default function AppRoutes() {
    return (
        
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<HomePage />} />
                <Route path='pokemon/:id' element={<PokemonPage />} />
                <Route path='search' element={<SearchPage />} />
            </Route>

            <Route path='*' element={<Navigate to='/' />} />
        </Routes>

    )
}

