import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import UpdateBlog from '../pages/UpdateBlog'

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
            <Route path="/register" element={<Register />} />
            <Route path="/update" element={<UpdateBlog />} />
        </Routes>
        </BrowserRouter>
        
            
        </div>
    )
}

export default AppRouter
