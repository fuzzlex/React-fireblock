import React, {  useEffect, useState } from 'react'

import BlogCard from '../components/BlogCard';
import { getDatabase, onValue, query, ref } from 'firebase/database';


export const useFetch=()=>{
    const [contactList, setContactList] = useState();
    const [isLoading,setIsLoading]=useState(false)
    console.log(isLoading)
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
    const { contactList , isLoading } = useFetch();

    return (
        
        <BlogCard  contactList = {contactList}  />
    )
}

export default Dashboard
