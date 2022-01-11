import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Button, CardActions } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


const BlogCard = ({contactList}) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
    <Box style={{display:"flex", minHeight:"100vh"}}>
    {contactList ?(contactList.map(item => (<Card key={item.id}  sx={{ maxWidth: 345,maxHeight: 475, mt: 14,ml:5,border:"2px solid orange" }}>
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
                {item.content.lenght > 10 ? item.content.slice(0,20) : item.content.slice(0,140).concat("....") }
              </Typography>         
              <Typography sx={{mt:1,fontSize:15}} variant="h6" color="secondary">
                { "User: " + item.currentUser}
              </Typography>         
            </CardContent>
             <CardActions style={{display:"flex", justifyContent:"flex-end"}}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                 Delete
                  </Button>
                    <Fab  size="small" color="secondary" aria-label="add">
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
