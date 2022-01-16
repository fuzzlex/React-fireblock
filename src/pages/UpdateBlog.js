import {  Box, Button, TextField, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { getDatabase,ref, update, } from "firebase/database"
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'



const UpdateBlog = () => {
    const Navigate = useNavigate()
    const { currentUser } = useContext(AuthContext);
    const location=useLocation();
    const recipe=location.state.recipe
    recipe.currentUser = currentUser.email

    const [title, setTitle] = useState(recipe.title)
    const [imageUrl, setImageUrl] = useState(recipe.imageUrl)
    const [content, setContent] = useState(recipe.content)
 

    const updateInfo=()=>{

       const db = getDatabase();
       update(ref(db, 'contact/' + recipe.id) , {
           content:content,
           title:title,
           imageUrl:imageUrl,
           currentUser:currentUser.email

       });      
   }
  

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateInfo()
        setTitle("")
        setImageUrl("")
        setContent("")
        Navigate("/")
    }
    
    return (
    
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


    )
}

export default UpdateBlog
