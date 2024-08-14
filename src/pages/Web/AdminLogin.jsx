

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const AdminLogin = () => {
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

// export default AdminLogin;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const AdminLogin = () => {
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
//     <div
//       className="h-full w-full flex justify-center items-center bg-login-background bg-cover bg-center"
//       style={{
//         backgroundImage: "url('https://ik.imagekit.io/yzjvopjsjb/Home/eventimg21.jpg?updatedAt=1723401772070')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Card className="w-[350px] bg-white bg-opacity-50"> {/* Added bg-opacity-50 for transparency */}
//         <CardHeader>
//           <CardTitle>Admin Login</CardTitle>
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

// export default AdminLogin;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaUserShield } from 'react-icons/fa'; // Importing admin icon from react-icons

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Mock authentication logic
    if (username === "Admin" && password === "password") {
      navigate("/userpage"); // Redirect to user page for "Admin" username
    } else if (username === "kums") {
      navigate("/admin/dashboard"); // Redirect to admin dashboard for valid admin credentials
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div
      className="h-full w-full flex justify-center items-center bg-login-background bg-cover bg-center"
      style={{
        backgroundImage: "url('https://ik.imagekit.io/yzjvopjsjb/Home/eventimg21.jpg?updatedAt=1723401772070')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Card className="w-[350px] bg-white bg-opacity-80"> {/* Adjusted opacity */}
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="flex items-center space-x-2"> {/* Center and add space for icon */}
            <FaUserShield className="text-xl" /> {/* Admin icon */}
            <span>Admin Login</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input
                  id="name"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminLogin;
