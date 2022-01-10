import React, { useContext, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@material-ui/core';
import { auth } from '../helpers/firebase';
import { AuthContext } from '../contexts/AuthContext'
import BlogCard from '../components/BlogCard';


const Dashboard = () => {

    return (
        <BlogCard />
    )
}

export default Dashboard
