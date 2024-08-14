



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!username || !password) {
//       setError("Please fill in both fields.");
//       return;
//     }

//     // Mock authentication logic
//     if (username === "Admin" && password === "password") {
//       navigate("/userpage"); // Redirect to user page for "Admin" username
//     } else if (username === "kums") {
//       navigate("/admin/dashboard"); // Redirect to admin dashboard for valid admin credentials
//     } else {
//       setError("Invalid username or password.");
//     }
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-center">
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Username</Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
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
//                   required
//                 />
//               </div>
//             </div>
//             {error && <p className="text-red-500">{error}</p>}
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-end">
//           <Button type="submit" onClick={handleLogin}>
//             Login
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Login;





// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:7777/api/auth/login",
//         formData
//       );
//       // try {
//       //   const response = await axios.post(
//       //     "http://localhost:8080/api/auth/authenticate",
//       //     formData
//       //   );
//       console.log(response.data);
//       const { accessToken, role } = response.data;
//       localStorage.setItem("token", accessToken);
//       localStorage.setItem("role", role);
//       // sessionStorage.setItem("token", token);
//       // sessionStorage.setItem("role", role);

//       console.log("Token:", localStorage.getItem("token"));
//       alert("Login Success.!");
//       if (role === "ADMIN") {
//         navigate("/admin");
//       } else {
//         navigate("/users");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Invalid Credentials.!");
//     }
//   };

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <input type="submit" value="Login" />
//       </form>
//       Need an Account<Link to="/">Click here</Link> to Register.
//     </div>
//   );
// }


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
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
// import Navbar from '../navbar/Navbar';
import axios from "axios";

// eslint-disable-next-line no-unused-vars
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
 
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [emailError, setEmailError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/api/auth/login",
        formData
      );
      console.log(response.data);
      const { accessToken, role } = response.data;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("role", role);

      console.log("Token:", localStorage.getItem("token"));
      alert("Login Success.!");
      if (role === "ADMIN") {
        navigate("/adminpage");
      } else {
        navigate("/admin/dashboard"); // Navigate to the user's home page
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid Credentials.!");
    }
  };

  return (
    // <>
    // <Navbar />
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Grid
          container
          component="main"
          sx={{
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              backgroundImage:
                "url(https://ik.imagekit.io/yzjvopjsjb/Home/eventimg21.jpg?updatedAt=1723401772070)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: 2,
              padding: { xs: 2, sm: 4, md: 6 },
              boxShadow: 3,
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              align="center"
              sx={{ color: "black" }}
            >
             ! WELCOME TO PLANIFY !
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                error={emailError}
                helperText={
                  emailError ? "Please enter a valid email address" : ""
                }
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiFormLabel-root": {
                    color: "black",
                    //fontWeight: "",
                    fontSize: "1.3rem",
                    top: "-10px",
                  },
                  "& .MuiInputBase-input": {
                    color: "black",
                    backgroundColor: "rgba(128, 128, 128, 0.3)",
                    borderRadius: "4px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "gray",
                    },
                    "&.Mui-focused fieldset": {
                      
                      borderColor: "black",
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                error={passwordError}
                helperText={
                  passwordError ? "Password must be at least 6 characters" : ""
                }
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiFormLabel-root": {
                    color: "black",
                    //fontWeight: "bold",
                    fontSize: "1.3rem",
                    top: "-10px",
                  },
                  "& .MuiInputBase-input": {
                    color: "black",
                    backgroundColor: "rgba(128, 128, 128, 0.3)",
                    borderRadius: "4px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "gray",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "blue",
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    color: "red",
                  },
                }}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{
                  "& .MuiTypography-root": {
                    color: "black",
                    //fontWeight: "bold",
                    fontSize: "1rem",
                  },
                  "& .MuiCheckbox-root": {
                    color: "black",
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="info"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  color: "black",
                  borderColor: "black",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderColor: "black",
                  },
                  "&:active": {
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                  },
                }}
              >
                To Begin your Booking
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link
                    href="/adminlogin"
                    variant="body2"
                    sx={{
                      color: "black",
                      "&:hover": {
                        color: "lightgray",
                      },
                    }}
                  >
                     Sign in Adminlogin
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="body2"
                    sx={{
                      color: "black",
                      "&:hover": {
                        color: "lightgray",
                      },
                    }}
                  >
                    {"Havn't an account? Register"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </ThemeProvider>
    // </>
  );
}