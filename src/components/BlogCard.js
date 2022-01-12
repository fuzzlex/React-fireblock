import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Button, CardActions,  } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { getDatabase, ref, remove } from 'firebase/database';
import { useNavigate } from 'react-router-dom';





const BlogCard = ({contactList}) => {
  // const { currentUser } = useContext(AuthContext);
  const Navigate = useNavigate();
  const deleteInfo=(id)=>{
    const db = getDatabase();
     ref(db, 'contact');
    remove(ref(db,"contact/"+id))

}
const handleUpdate = (id, title, imageUrl, content) =>{
  const recipe = {id:id, title:title, imageUrl:imageUrl, content: content}
   Navigate("/update", { state: {recipe} })
                      

}
  return (
    <div>
    <Box style={{display:"flex", minHeight:"100vh",maxWidth:"100vw", flexWrap:"wrap"}}>
    {contactList ?(contactList.map(item => (
     
      
      <Card key={item.id}  sx={{ maxWidth: 345,maxHeight: 475, mt: 12,ml:9,border:"2px solid orange" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="270"
              image={item.imageUrl}
              alt="green iguana"
              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body3" color="primary">
                {item.content.slice(0,140).concat("....") }
              </Typography>         
              <Typography sx={{mt:1,fontSize:15}} variant="h6" color="secondary">
                { "AUTHOR: " +   item.currentUser}
              </Typography>         
            </CardContent>
             <CardActions style={{display:"flex", justifyContent:"flex-end"}}>
                <Button onClick={() => deleteInfo(item.id)} variant="outlined" startIcon={<DeleteIcon />}>
                 Delete
                  </Button>
                    <Fab  onClick={() => handleUpdate(item.id,item.title, item.imageUrl, item.content)} size="small" color="secondary" aria-label="add">
                  <AddIcon />
                </Fab>
         
      </CardActions>
          </CardActionArea>
      
        </Card>))) : (console.log("bekliyoruz"))}
      

      
    </Box>
    
      
    </div>
  )
}

export default BlogCard
