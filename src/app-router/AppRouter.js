import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'

const AppRouter = () => {
    return (
        <div>
        <BrowserRouter>
        <Navbar />
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new" element={<NewBlog />} />
            <Route path="/login" element={<Login />} />
        </Routes>


        </BrowserRouter>
        
            
        </div>
    )
}

export default AppRouter
