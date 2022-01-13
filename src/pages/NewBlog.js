import {  Box, Button, TextField, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { getDatabase,ref,push,set} from "firebase/database"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'



const NewBlog = () => {
    const Navigate = useNavigate()
    const { currentUser } = useContext(AuthContext);

    const [title, setTitle] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [content, setContent] = useState()


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(currentUser){
            addInfo({title:title, imageUrl:imageUrl, content:content,currentUser:currentUser.email});
            setTitle("")
            setImageUrl("")
            setContent("")
            Navigate("/")}
        else{
            alert("Please Login the page!")
            Navigate("/login")

        } 
   



    }
    const addInfo=(info)=>{
        console.log(info);
        const db=getDatabase();
        const userRef=ref(db,"contact")
        const newUserRef=push(userRef)
        set(newUserRef,{
            title:info.title,
            imageUrl:info.imageUrl,
            content:info.content,
            currentUser:info.currentUser,
            likeCount:0,
            comm : {initial : {comment:"Would you like to comment?"}}
        });
     
    }

    
    return (
        // <Box  sx={{minHeight:"100vh", backgroundColor:"orange" }}>
        // <Box sx={{width:"100vw", height:"100vh",  backgroundColor:"white",display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
        <Box 
        onSubmit={handleSubmit}
        component="form"
        py={4}
        sx={{     
               
        minHeight:"100vh", 
        display:"flex",
        justifyContent:"center",
        alignItems:"center", 
        backgroundColor:"#ECDBBA"      
        }}
      noValidate
      autoComplete="off"
      >
      <Box
      sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        width:"50vw",
        height:"70vh",
        border:"1px solid red",
        backgroundColor:"white",
        padding:"4rem"}}
      >
        <Typography variant="h4">NEW BLOG </Typography>
        
                    <TextField
                       value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="filled-multiline-flexible"
                        label="Title"
                        multiline
                        rows={1}
                        fullWidth
                        
                    />
                    <TextField
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        id="filled-multiline-flexible"
                        label="Image-Url"
                        multiline
                        rows={1}
                        fullWidth
                        
                    />
                    <TextField
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        id="filled-multiline-flexible"
                        label="Content"
                        multiline
                        rows={10}
                        fullWidth                    
                    />
                    <Button
                        type="submit"
                        style={{
                            width: `calc(20rem - 1vw)`,
                            marginTop: "1rem",
                        }}
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        SUBMIT
                    </Button>
            
                    </Box>
                    </Box>

    //     </Box>
    // </Box>
    )
}

export default NewBlog
