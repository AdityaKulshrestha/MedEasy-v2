import React, {useContext} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ForgotPassword from "./ForgotPassword";
import { GoogleIcon, FacebookIcon } from "./CustomIcons";
import logo from "../../../assets/logo2.png";
import AuthContext from "../../../providers/authProvider";
import { ToastContainer } from "react-toastify";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  borderRadius: theme.spacing(2),
  boxShadow: theme.palette.mode === "dark"
    ? "hsla(220, 30%, 5%, 0.5) 0px 5px 15px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px"
    : "hsla(220, 30%, 5%, 0.05) 0px 5px 15px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: { width: "450px" },
}));


export default function SignUpCard() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const {
    // setUser,
    // setAuthTokens,
    registerUser,
    // loginUser,
    logoutUser,
    // user,
    authTokens,
  } = useContext(AuthContext);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const username = data.get("username");
    const password = data.get("password");
    const password2 = data.get("password2");

    console.log(email, username, password, password2);
    await registerUser({email, password, username, password2});
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const username = document.getElementById("username");
    const password2 = document.getElementById("password2");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if(!username.value){
      setEmailError(true);
      setEmailErrorMessage("Please enter a username.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    }else if(password.value !== password2.value){
      setPasswordError(true);
      setPasswordErrorMessage("Passwords do not match");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  if(authTokens){
    return(
      <Card variant="outlined">
        <ToastContainer />
        <p>You're already logged in, please logout first</p>
        <Button onClick={logoutUser}>Logout</Button>
      </Card>
    )
  }
  return (
    <Card variant="outlined">
      <ToastContainer />
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <img
          src={logo}
          alt="login"
          className="w-1/3 h-auto mx-auto mix-blend-hard-light opacity-75 sm:w-1/5"
        />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign up
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <TextField
            // error={emailError}
            // helperText={emailErrorMessage}
            id="username"
            type="username"
            name="username"
            placeholder="username123"
            autoComplete="username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password">Password</FormLabel>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password2"> Confirm Password</FormLabel>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password2"
            placeholder="••••••"
            type="text"
            id="password2"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? "error" : "primary"}
          />
        </FormControl>
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={validateInputs}
        >
          Sign up
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Already have an account?{" "}
          <span>
            <Link variant="body2" sx={{ alignSelf: "center" }} href="/signin">
              Sign In
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>or</Divider>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 2 }}>
        <GoogleIcon sx={{ cursor: "pointer", width: 40, height: 40 }} onClick={() => alert("Sign in with Google")} />
        <FacebookIcon sx={{ cursor: "pointer", width: 40, height: 40 }} onClick={() => alert("Sign in with Facebook")} />
      </Box>
    </Card>
  );
}