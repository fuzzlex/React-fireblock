import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import {auth} from "../helpers/firebase"
import {createUserWithEmailAndPassword,  updateProfile} from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = name + " " + surname;
        try {
            await createUserWithEmailAndPassword(auth , email, password)
            await updateProfile(auth.currentUser, {displayName : displayName})
            Navigate("/")          
            
        } catch  {
            alert("Something wrong!!! ")            
        }
        setEmail("");
        setName("");
        setSurname("");
        setPassword("");
    };



    return (        
            <Box 
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    minHeight: "110vh",
                    justifyContent: "center",
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    backgroundImage: 'url("https://picsum.photos/id/426/600/400")',
                    backgroundSize: "cover",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#F0ECE3",
                        flexDirection: "column",
                        width: `calc(25rem - 1vw)`,
                        height: "70vh",
                        opacity: "0.91",
                        border:"3px solid purple",
                        borderRadius:"1rem"
                    }}
                >
                    <Typography variant="h4">REGISTER </Typography>{" "}
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                       
                        id="filled-basic"
                        label="Name"
                        variant="filled"
                        fullWidth
                    /><br></br>
                    <TextField
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}                       
                        id="filled-basic"
                        label="Surname"
                        variant="filled"
                        fullWidth
                    /><br></br>
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                       
                        id="filled-basic"
                        label="E-mail"
                        variant="filled"
                        fullWidth
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="filled-basic"
                        label="Password"
                        variant="filled"
                        fullWidth
                        style={{                            
                            marginTop: "1rem",
                        }}
                    /><br></br>
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
     
    );
};

export default Login;
