import React, { useContext } from "react";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea,  CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ButtonOfLike, ButtonOfComment} from "./LikeandComment";
import { Card as Carder, Placeholder } from 'semantic-ui-react'
import { getDatabase, ref, update } from "firebase/database";

const BlogCard = ({ contactList, isLoading }) => {

  const { currentUser } = useContext(AuthContext);
  const Navigate = useNavigate();

  
  const handleDetailSubmit = (item) =>{
    currentUser ? 
    Navigate("/details" , {state :  { item }}) :
    alert("Please login  the page!") 

  }
  const updateInfo=(id, like)=>{

    const db = getDatabase();
    update(ref(db, 'contact/' + id) , {
          likeCount:like
    });
   
}
  const handleLike = (clickId) =>{

     contactList?.map((e) => ((e.id) === clickId) && 
      updateInfo(e.id, parseInt(e.likeCount) + 1)  
       
    ) 

  }




  return (
    <div>

    <div>
    {isLoading ? (
      <Carder.Group itemsPerRow={3} style={{marginTop:"10rem"}}>
    <Carder>
      <Carder.Content>
        <Placeholder>
          <Placeholder.Image rectangular />
        </Placeholder>
      </Carder.Content>
    </Carder>
    <Carder>
      <Carder.Content>
        <Placeholder>
          <Placeholder.Image rectangular />
        </Placeholder>
      </Carder.Content>
    </Carder>
    <Carder>
      <Carder.Content>
        <Placeholder>
          <Placeholder.Image rectangular />
        </Placeholder>
      </Carder.Content>
    </Carder>
  </Carder.Group>) : <></> }  
  



    </div>

    <div>

    <Box
        style={{
          display: "flex",
          maxWidth: "100vw",
          maxHeight: "110vh",
          flexWrap: "wrap",
          justifyContent:"center"
        }}
      >
     { contactList ? contactList.map((item) => (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 345,
                  mt: 12,
                  ml:2,
                  border: "2px solid orange",
                  position:"relative"
                }}
               
              >
                <CardActionArea  onClick={() => handleDetailSubmit(item)}>
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
                      
                      {item.content.slice(0, 120).concat("....")}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: 15,
                      }}
                      variant="h6"
                      color="secondary"
                    >
                      
                      {"Author : " + item.currentUser}
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    
                  </CardActions>
                 
                </CardActionArea>
                <Box  style={{width:"inherit", display:"flex", justifyContent:"center",marginBottom:"2rem"}}>
                    <Box  onClick={() => handleLike(item.id)} >
                        <ButtonOfLike likeCount={item.likeCount} />

                    </Box>
                  <ButtonOfComment item = {item} />
                </Box>
              </Card>
            ))
          : console.log("bekliyoruz<")} 
      </Box>


    </div>
  
        
        
    
    </div>
  );
};

export default BlogCard;
