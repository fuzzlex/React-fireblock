import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Button, CardActions } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getDatabase, ref, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { Button as Butt, Comment, Form, Header, Segment } from 'semantic-ui-react'

const Details = () => {
  const [comment, setComment] = useState();
  const [state, setState] = useState(false);

    const location=useLocation();
    const recipe=location.state.item
    const Navigate = useNavigate();
    const deleteInfo = (id) => {
      const db = getDatabase();
      ref(db, "contact");
      remove(ref(db, "contact/" + id));
      Navigate("/")
    };
    const handleUpdate = (id, title, imageUrl, content) => {
      const recipe = {
        id: id,
        title: title,
        imageUrl: imageUrl,
        content: content,
      };
      Navigate("/update", {
        state: { recipe } });
    };
    const handleSummitOnComment = () =>{
      console.log(comment);
      setState(true)

    }


    return (
        <div>
         <Box
        style={{
          display: "flex",
          maxHeight: "100vw",
          justifyContent: "center",
        }}
      >
        <Card   
                sx={{
                  maxWidth: "66vw",
                  mt: 11,
                  border: "2px solid orange",
                }}>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height="310"
                    image={recipe.imageUrl}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {recipe.title}
                    </Typography>
                    <Typography variant="body3" color="primary">
                      
                      {recipe.content}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: 15,
                      }}
                      variant="h6"
                      color="secondary"
                    >
                      
                      {"Author : " + recipe.currentUser}
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      onClick={() =>
                        handleUpdate(
                            recipe.id,
                            recipe.title,
                          recipe.imageUrl,
                          recipe.content
                        )
                      }
                      variant="outlined"
                      startIcon={<EditIcon />}
                    >
                      UPDATE
                    </Button>
                    <Button
                      onClick={() => deleteInfo(recipe.id)}
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </CardActionArea>
                <Box>

                {state ? (<Header as='h2' attached='top'>
      Attached Header
    </Header>) : (<Header as='h2' attached='top'>
      No Comment Here
    </Header>)}
    {state &&  <Segment attached>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Segment>}

                
           <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='https://cdn-icons.flaticon.com/png/128/1144/premium/1144709.png?token=exp=1642045147~hmac=b98282a6582bf7319d96bb71afe6fef3' />
      <Comment.Content>
        <Comment.Metadata>
          <div>User  :</div>
        </Comment.Metadata>
        <Comment.Author as='a'>{recipe.currentUser}</Comment.Author>
        <Comment.Text>Member!</Comment.Text>
        <Comment.Actions>
          <Comment.Action active>Reply</Comment.Action>
        </Comment.Actions>
        <Form reply onSubmit={handleSummitOnComment}>
          <Form.TextArea onChange={(e) => setComment(e.target.value)}  />
          <Butt
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary
            type="submit"
          />
        </Form>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)
           </Box>
              </Card>
              
           </Box>
           
            
        </div>
    )
}

export default Details
