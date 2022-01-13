import React, {  useContext, useEffect, useState } from 'react'

import BlogCard from '../components/BlogCard';
import { getDatabase, onValue, query, ref } from 'firebase/database';
import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


export const useFetch=()=>{
    const [contactList, setContactList] = useState();
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
      setIsLoading(true)

      const db = getDatabase();
      const userRef = ref(db, 'contact');
  
      onValue(query(userRef), snapshot => {
        const contacts=snapshot.val()
        // send an array of the values in database
        const contactArray = [];
        for (let id in contacts) {
          contactArray.push({ id, ...contacts[id] });
        }
        setContactList(contactArray);
        setIsLoading(false)
      })
    },[]);
    return {isLoading,contactList};
}


const Dashboard = () => {
    const { contactList,isLoading  } = useFetch();
    const Navigate = useNavigate();
    const {currentUser} = useContext(AuthContext)

    return (
        <Box   >
        <BlogCard  contactList = {contactList} isLoading={isLoading}  />
        <Box onClick={() => currentUser ? Navigate("/new") : alert("Please Login the page!!")}  sx={{position:"absolute",right:"2rem", top:"20rem"}}  >

        <Fab color="secondary" aria-label="add">
        <AddIcon />
          </Fab>

        </Box>
            
        </Box>
    )
}

export default Dashboard
