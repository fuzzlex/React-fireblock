import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getDatabase, onValue, query, ref } from 'firebase/database';


const BlogCard = ({contactList}) => {
  return (
    <div>
    {contactList ?(contactList.map(item => (<Card key={item.id}  sx={{ maxWidth: 345, mt: 10 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>))) : (console.log("bekliyoruz"))}
      
      
    </div>
  )
}

export default BlogCard
