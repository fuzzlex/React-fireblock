import React, {  useEffect, useState } from 'react'

import BlogCard from '../components/BlogCard';
import { getDatabase, onValue, query, ref } from 'firebase/database';
import { Box } from '@mui/material';


export const useFetch=()=>{
    const [contactList, setContactList] = useState();
    // const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
    //   setIsLoading(true)

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
        // setIsLoading(false)
      })
    },[]);
    return {contactList};
}


const Dashboard = () => {
    const { contactList  } = useFetch();

    return (
        <Box   >
        <BlogCard  contactList = {contactList}  />            
        </Box>
    )
}

export default Dashboard
