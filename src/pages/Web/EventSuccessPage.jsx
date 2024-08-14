// // import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// const EventSuccessPage = () => {
//   const location = useLocation();
//   const event = location.state?.event;

//   return (
//     <div className="h-screen w-full flex justify-center items-center p-4 bg-gray-100">
//       <Card className="w-[400px] bg-white shadow-md rounded-lg">
//         <CardHeader>
//           <CardTitle>Event Booking Successful!</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-lg mb-4">Thank you for booking the event.</p>
//           <p className="font-bold">Event Details:</p>
//           <ul className="list-disc pl-5 mt-2">
//             <li><strong>Name:</strong> {event?.name}</li>
//             <li><strong>Phone:</strong> {event?.phone}</li>
//             <li><strong>Email:</strong> {event?.email}</li>
//             <li><strong>Event Title:</strong> {event?.eventTitle}</li>
//             <li><strong>Event Date:</strong> {event?.eventDate}</li>
//             <li><strong>Event Location:</strong> {event?.eventLocation}</li>
//           </ul>
//         </CardContent>
//         {/* eslint-disable-next-line react/jsx-no-undef */}
//         <CardFooter className="flex justify-end">
//           <Button className="bg-red-500 text-white py-2 px-4 rounded">
//             Back to Home
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default EventSuccessPage;
