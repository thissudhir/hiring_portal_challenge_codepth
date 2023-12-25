import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Typography, Container, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
});

const StyledPaper = styled(Paper)({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //   const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(email);
      const user = userCredential.user;
      console.log("Logged in:", user);
      // Redirect to a different page upon successful login
      //   history.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <StyledPaper elevation={3}>
        <Typography component="h1" variant="h5">
          Singup
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sing Up
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}
        <Typography>
          Already have an account?
          <Link to="/login">Login up</Link>
        </Typography>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Singup;
