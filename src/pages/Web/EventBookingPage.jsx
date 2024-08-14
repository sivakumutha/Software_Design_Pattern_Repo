



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const EventBookingPage = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [eventTitle, setEventTitle] = useState("");
//   const [eventDate, setEventDate] = useState("");
//   const [eventLocation, setEventLocation] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const isValidPhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleClick = () => {
//     if (!name || !phone || !email || !eventTitle || !eventDate || !eventLocation) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     if (!isValidPhoneNumber(phone)) {
//       setError("Please enter a valid phone number.");
//       return;
//     }
//     if (!isValidEmail(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     const event = { name, phone, email, eventTitle, eventDate, eventLocation, date: new Date().toLocaleString() };
//     toast.success("Event added successfully!");

//     // Navigate to the event-details page with state
//     navigate("/event-details", { state: { event } });
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-start p-4">
//       <ToastContainer />
//       <Card className="w-[600px] h-auto my-50">
//         <CardHeader>
//           <CardTitle>Booking Event</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <div className="grid w-full items-center gap-2">
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
//                 <Label htmlFor="eventTitle">Event Title</Label>
//                 <Input
//                   id="eventTitle"
//                   placeholder="Enter Event Title"
//                   value={eventTitle}
//                   onChange={(e) => setEventTitle(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="eventDate">Event Date</Label>
//                 <Input
//                   id="eventDate"
//                   type="date"
//                   value={eventDate}
//                   onChange={(e) => setEventDate(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="eventLocation">Event Location</Label>
//                 <Input
//                   id="eventLocation"
//                   placeholder="Enter Event Location"
//                   value={eventLocation}
//                   onChange={(e) => setEventLocation(e.target.value)}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>
//             {error && <p className="text-red-500 mt-2">{error}</p>}
//             <CardFooter className="flex justify-end mt-4">
//               <Button 
//                 type="button" // Changed to button type
//                 onClick={handleClick} 
//                 className="bg-red-500 text-white py-2 px-4 rounded"
//               >
//                 Submit
//               </Button>
//             </CardFooter>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default EventBookingPage;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const EventBookingPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     eventTitle: "",
//     eventDate: "",
//     eventLocation: "",
//   });
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const isValidPhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = () => {
//     const { name, phone, email, eventTitle, eventDate, eventLocation } = formData;
    
//     if (!name || !phone || !email || !eventTitle || !eventDate || !eventLocation) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     if (!isValidPhoneNumber(phone)) {
//       setError("Please enter a valid phone number.");
//       return;
//     }
//     if (!isValidEmail(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     const event = { name, phone, email, eventTitle, eventDate, eventLocation, date: new Date().toLocaleString() };
//     toast.success("Event added successfully!");

//     // Navigate to the event-details page with state
//     navigate("/event-details", { state: { event } });
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-start p-4">
//       <ToastContainer />
//       <Card className="w-[600px] h-auto my-50">
//         <CardHeader>
//           <CardTitle>Booking Event</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <div className="grid w-full items-center gap-2">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="phone">Phone no</Label>
//                 <Input
//                   id="phone"
//                   placeholder="Enter Phone no"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   placeholder="Enter Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="eventTitle">Event Title</Label>
//                 <Input
//                   id="eventTitle"
//                   placeholder="Enter Event Title"
//                   value={formData.eventTitle}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="eventDate">Event Date</Label>
//                 <Input
//                   id="eventDate"
//                   type="date"
//                   value={formData.eventDate}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="eventLocation">Event Location</Label>
//                 <Input
//                   id="eventLocation"
//                   placeholder="Enter Event Location"
//                   value={formData.eventLocation}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>
//             {error && <p className="text-red-500 mt-2">{error}</p>}
//             <CardFooter className="flex justify-end mt-4">
//               <Button 
//                 type="button" // Changed to button type
//                 onClick={handleSubmit} 
//                 className="bg-red-500 text-white py-2 px-4 rounded"
//               >
//                 Submit
//               </Button>
//             </CardFooter>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default EventBookingPage;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const EventBookingPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     eventTitle: "",
//     eventDate: "",
//     eventLocation: "",
//   });
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const isValidPhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, phone, email, eventTitle, eventDate, eventLocation } = formData;

//     if (!name || !phone || !email || !eventTitle || !eventDate || !eventLocation) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     if (!isValidPhoneNumber(phone)) {
//       setError("Please enter a valid phone number.");
//       return;
//     }
//     if (!isValidEmail(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     const event = { name, phone, email, eventTitle, eventDate, eventLocation, date: new Date().toLocaleString() };

//     try {
//       // Replace with your actual SignUp function or API call
//       // const res = await SignUp(name, email, phone, eventLocation, eventTitle);
//       toast.success("Event added successfully!");

//       // Navigate to the event-details page with state
//       navigate("/event-details", { state: { event } });
//     } catch (err) {
//       toast.error("Failed to add event. Please try again.");
//     }
//   };

//   return (
//     <div className="h-full w-full flex justify-center items-start p-4">
//       <ToastContainer />
//       <Card className="w-[600px] h-auto my-50">
//         <CardHeader>
//           <CardTitle>Booking Event</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit}>
//             <div className="grid w-full items-center gap-2">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="phone">Phone no</Label>
//                 <Input
//                   id="phone"
//                   placeholder="Enter Phone no"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   placeholder="Enter Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="eventTitle">Event Title</Label>
//                 <Input
//                   id="eventTitle"
//                   placeholder="Enter Event Title"
//                   value={formData.eventTitle}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="eventDate">Event Date</Label>
//                 <Input
//                   id="eventDate"
//                   type="date"
//                   value={formData.eventDate}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="eventLocation">Event Location</Label>
//                 <Input
//                   id="eventLocation"
//                   placeholder="Enter Event Location"
//                   value={formData.eventLocation}
//                   onChange={handleChange}
//                   className="p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>
//             {error && <p className="text-red-500 mt-2">{error}</p>}
//             <CardFooter className="flex justify-end mt-4">
//               <Button 
//                 type="submit" // Changed to submit type
//                 className="bg-red-500 text-white py-2 px-4 rounded"
//               >
//                 Submit
//               </Button>
//             </CardFooter>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default EventBookingPage;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EventBookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventTitle: "",
    eventDate: "",
    eventLocation: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, eventTitle, eventDate, eventLocation } = formData;

    if (!name || !phone || !email || !eventTitle || !eventDate || !eventLocation) {
      setError("Please fill in all fields.");
      return;
    }
    if (!isValidPhoneNumber(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const event = { name, phone, email, eventTitle, eventDate, eventLocation, date: new Date().toLocaleString() };

    try {
      // Replace with your actual SignUp function or API call
      // const res = await SignUp(name, email, phone, eventLocation, eventTitle);
      toast.success("Event added successfully!");

      // Navigate to the event-details page with state
      navigate("/event-details", { state: { event } });
    } catch (err) {
      toast.error("Failed to add event. Please try again.");
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-start p-4">
      <ToastContainer />
      <Card className="w-[600px] h-auto my-50">
        <CardHeader>
          <CardTitle>Booking Event</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 border rounded"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone no</Label>
                <Input
                  id="phone"
                  placeholder="Enter Phone no"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-2 border rounded"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 border rounded"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="eventTitle">Event Title</Label>
                <Input
                  id="eventTitle"
                  placeholder="Enter Event Title"
                  value={formData.eventTitle}
                  onChange={handleChange}
                  className="p-2 border rounded"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="p-2 border rounded"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="eventLocation">Event Location</Label>
                <Input
                  id="eventLocation"
                  placeholder="Enter Event Location"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  className="p-2 border rounded"
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <CardFooter className="flex justify-end mt-4">
              <Button 
                type="submit" // Changed to submit type
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Submit
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventBookingPage;
