import React, { useContext,  useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Button, CardActions, Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getDatabase,
  push,
  ref,
  remove,
} from "firebase/database";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button as Butt,
  Comment,
  Form,
  Header,
  Segment,
} from "semantic-ui-react";
import { AuthContext } from "../contexts/AuthContext";
import { useFetch } from "./Dashboard";

const Details = () => {
  const [comment, setComment] = useState();
  const { currentUser } = useContext(AuthContext);

  const location = useLocation();
  const recipe = location.state.item;
  const Navigate = useNavigate();

  const deleteInfo = (id) => {
    const db = getDatabase();
    ref(db, "contact");
    remove(ref(db, "contact/" + id));
    Navigate("/");
  };
  const handleUpdate = (id, title, imageUrl, content) => {
    const recipe = {
      id: id,
      title: title,
      imageUrl: imageUrl,
      content: content,
    };
    Navigate("/update", {
      state: { recipe },
    });
  };
  const { contactList } = useFetch();
  
  
  const comms = contactList?.filter((e) => e.id === recipe.id && e.comm );
  const commm = comms && Object.values(comms[0].comm);

  const handleSummitOnComment = () => {
    updateInfo(recipe.id);
  };
  const updateInfo = (id) => {
    const db = getDatabase();
    push(ref(db, "contact/" + id + "/comm"), {
      comment: comment,
      commentSender: currentUser.email,

    });
  };

  return (
    <div>
      <Box
        style={{
          display: "flex",
          Height: "100vw",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: "66vw",
            mt: 10,
            border: "2px solid orange",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="310"
              image={recipe.imageUrl}
              alt="green iguana"            />
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
            {(commm?.map((e,index) => (
              <div key={index}>
            
                <Avatar
                  src="https://cdn-icons.flaticon.com/png/128/1144/premium/1144709.png?token=exp=1642045147~hmac=b98282a6582bf7319d96bb71afe6fef3"
                  style={{marginBottom:"-2.9rem"}}                
                />
               
                
                <Header  as="h3" attached="top">
                  {e.commentSender}
                </Header>
                <Segment attached>
                  {e.comment}
                </Segment>
              </div>
            )))  } 

            <Comment.Group>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://cdn-icons.flaticon.com/png/128/1144/premium/1144709.png?token=exp=1642045147~hmac=b98282a6582bf7319d96bb71afe6fef3"
                />
                <Comment.Content>
                  <Comment.Metadata>
                    <div>User :</div>
                  </Comment.Metadata>
                  <Comment.Author as="a">{currentUser ? currentUser.email : ""}</Comment.Author>
                  <Comment.Text>Member!</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action active>Reply</Comment.Action>
                  </Comment.Actions>
                  <Form reply onSubmit={handleSummitOnComment}>
                    <Form.TextArea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <Butt
                      content="Add Reply"
                      labelPosition="left"
                      icon="edit"
                      primary
                      type="submit"
                    />
                  </Form>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default Details;
