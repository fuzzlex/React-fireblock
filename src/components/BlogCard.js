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
  return (
    <div>
    <Box style={{display:"flex", minHeight:"100vh"}}>
    {contactList ?(contactList.map(item => (<Card key={item.id}  sx={{ maxWidth: 345, mt: 14 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={item.imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body3" color="text.secondary">
                {item.content}
              </Typography>         
              <Typography sx={{mt:1}} variant="h6" color="text.secondary">
                {currentUser ? currentUser.email : ""}
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
