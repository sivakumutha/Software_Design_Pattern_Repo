



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// // eslint-disable-next-line react/prop-types
// const Register = ({ setEventDetails }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const isValidPhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !phone) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     if (!isValidPhoneNumber(phone)) {
//       setError("Please enter a valid phone number.");
//       return;
//     }

//     const event = { name, email, password, phone, date: new Date().toLocaleString() };
//     setEventDetails(event);

//     toast.success("Registered successfully!");
//     navigate("/event-details");
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-center">
//       <ToastContainer />
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Register</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleRegister}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="phone">Phone no</Label>
//                 <Input
//                   id="phone"
//                   placeholder="Enter Phone no"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>
//             {error && <p className="text-red-500">{error}</p>}
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-end">
//           <Button type="submit" onClick={handleRegister} className="bg-red-500 text-white py-2 px-4 rounded">
//             Register
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Register;


// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {/* <Link color="inherit" href="https://mui.com/">
        WANDERLUST website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."} */}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    setFormError("");

    // Basic validations
    const emailValid = /\S+@\S+\.\S+/.test(userData.email);
    const passwordValid = userData.password.length >= 6;

    if (!emailValid) {
      setEmailError("Please enter a valid email address");
    }
    if (!passwordValid) {
      setPasswordError("Password must be at least 6 characters");
    }

    if (emailValid && passwordValid) {
      try {
        const response = await axios.post(
          "http://localhost:8081/api/auth/register",
          userData
        );
        console.log(response.data);

        // Navigate to Home page after successful registration
        navigate("/login");
      } catch (error) {
      
        setFormError("Registration failed. Please try again.");
      }
    } else {
      setFormError("Please fix the errors above.");
    }
  };

  return (
  
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage:
          "url(https://ik.imagekit.io/yzjvopjsjb/Home/eventimg21.jpg?updatedAt=1723401772070)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          minWidth: "100vw",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.3)", // White opaque background
                borderRadius: 2, // Rounded corners
                padding: 4,
                width: "100%",
                justifyContent: "center",
              }}
              >
              {formError && (
                <Typography color="error" variant="body2" align="center">
                  {formError}
                </Typography>
              )}
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      backgroundColor: "rgba(128, 128, 128, 0.5)", // Gray opaque background
                      borderRadius: 1,
                      "& .MuiInputBase-input": {
                        fontSize: "1.1rem",
                        color: "black",
                      },
                      "& .MuiFormLabel-root": {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    placeholder="Email Address"
                    name="email"
                    autoComplete="email"
                    value={userData.email}
                    onChange={handleChange}
                    error={!!emailError}
                    helperText={emailError}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      backgroundColor: "rgba(128, 128, 128, 0.3)",
                      borderRadius: 1,
                      "& .MuiInputBase-input": {
                        fontSize: "1.1rem",
                        color: "black",
                      },
                      "& .MuiFormLabel-root": {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    placeholder="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={userData.password}
                    onChange={handleChange}
                    error={!!passwordError}
                    helperText={passwordError}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      backgroundColor: "rgba(128, 128, 128, 0.5)",
                      borderRadius: 1,
                      "& .MuiInputBase-input": {
                        fontSize: "1.1rem",
                        color: "black",
                      },
                      "& .MuiFormLabel-root": {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                    />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Stay in the loop - drop your email!"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="info"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderColor: "black",
                  color: "black",
                  backgroundColor: "rgba(128, 128, 128, 0.5)", // Gray opaque background
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "rgba(105, 105, 105, 0.7)", // Slightly darker gray on hover
                    color: "white",
                  },
                }}
                >
                Register
              </Button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="body2"
                    sx={{ color: "black" }}
                    >
                    {/* // eslint-disable-next-line react/no-unescaped-entities */}
                    Havent Register? Login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <Copyright sx={{ mt: 5, color: "black" }} />
      </Box>
    </ThemeProvider>
 
                  
  );
}