import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Form } from "./UseForm";
import { FcGoogle } from "react-icons/fc";
import {auth} from "../helpers/firebase"
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
    };
    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
     

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Box
                sx={{
                    minHeight: "110vh",
                    justifyContent: "center",
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    backgroundImage: 'url("https://picsum.photos/id/609/600/400")',
                    backgroundSize: "cover",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "orange",
                        flexDirection: "column",
                        width: "30vw",
                        height: "70vh",
                        opacity: "0.87",
                    }}
                >
                    <Typography variant="h4">LOGIN </Typography>{" "}
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "20vw",
                            margin: "1rem",
                        }}
                        id="filled-basic"
                        label="E-mail"
                        variant="filled"
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "20vw",
                            margin: "1rem",
                        }}
                        id="filled-basic"
                        label="Password"
                        variant="filled"
                    />
                    <Button
                        type="submit"
                        style={{
                            width: "15vw",
                            marginTop: "1rem",
                        }}
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        SUBMIT
                    </Button>
                    <Button
                        onClick={signInWithGoogle}
                        style={{
                            width: "20vw",
                            marginTop: "1rem",
                        }}
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<FcGoogle />}
                    >
                        SIGN IN WITH GOOGLE
                    </Button>
                </Box>
            </Box>
        </Form>
    );
};

export default Login;
