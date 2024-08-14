



// import { Link } from 'react-router-dom';

// const imageData = [
//   {
//     url: "https://www.table-art.co.uk/wp-content/uploads/2018/04/1136px-x-675px-peachy-image.jpg",
//     text: "Birthday",
//     route: "/eventbook", // Update with the appropriate route
//   },
//   {
//     url: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg",
//     text: "Wedding",
//     route: "/eventbook", // Update with the appropriate route
//   },
//   {
//     url: "https://media.licdn.com/dms/image/D4D12AQFxuo8CWk6qIg/article-cover_image-shrink_720_1280/0/1681980612057?e=2147483647&v=beta&t=3UqUyScRpe57OfnfM_R1IiYRfooYgHhNCKykNPGVYeI",
//     text: "Conference",
//     route: "/eventbook", // Update with the appropriate route
//   },
//   {
//     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcL1RLFEzrUEfUgu7xkLMtKJsIrya6fzoQ8ELWKvOZoK7gIzSnam3fq3W1QhYJ0OdiT1s&usqp=CAU",
//     text: "Party",
//     route: "/eventbook", // Update with the appropriate route
//   },
//   {
//     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8BowtVVFfWUn52DjJyDtMd1-RgKMufS_6Q&usqp=CAU",
//     text: "DJ",
//     route: "/eventbook", // Update with the appropriate route
//   },
// ];

// function Events() {
//   return (
//     <div className="relative flex justify-center items-center h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden">
//       <style>
//         {`
//           @keyframes zoomInRotate {
//             0% {
//               transform: scale(0.8) rotate(0deg) translateY(30px);
//               opacity: 0;
//             }
//             50% {
//               transform: scale(1.1) rotate(3deg) translateY(-10px);
//               opacity: 0.5;
//             }
//             100% {
//               transform: scale(1) rotate(0deg) translateY(0px);
//               opacity: 1;
//             }
//           }
//           .zoom-rotate-animation {
//             animation: zoomInRotate 1s ease-in-out;
//           }
//         `}
//       </style>
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-64 h-64 bg-gray-400 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-gray-600 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-800 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//       </div>
//       <div className="relative flex gap-4 perspective-1000">
//         {imageData.map((item, index) => (
//           <div
//             key={index}
//             className="relative w-52 h-72 bg-cover bg-center cursor-pointer transition-transform duration-500 flex justify-center items-center zoom-rotate-animation"
//             style={{ backgroundImage: `url(${item.url})` }}
//           >
//             <Link
//               to={item.route} // Dynamic route based on event type
//               className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 bg-transparent text-white text-xl font-bold px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition-colors duration-300"
//             >
//               {item.text}
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Events;




// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const allEvents = [
//   { id: 1, title: 'Birthday Party', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg17.webp?updatedAt=1723287414849', category: 'Birthday' },
//   { id: 2, title: 'Wedding Ceremony', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg19.avif?updatedAt=1723288078531', category: 'Wedding' },
//   { id: 3, title: 'Concert Night', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg6.jpg?updatedAt=1723224418728', category: 'Concert' },
//   { id: 4, title: 'Corporate Meeting', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg20.avif?updatedAt=1723288421692', category: 'Corporate' },
//   { id: 5, title: 'Art Exhibition', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg10.jpg?updatedAt=1723287163122', category: 'Art' },
//   { id: 6, title: 'Charity Gala', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg11.jpg?updatedAt=1723287163260', category: 'Charity' },
//   { id: 7, title: 'Food Festival', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg12.jpg?updatedAt=1723287163255', category: 'Food' },
//   { id: 8, title: 'Tech Conference', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg9.jpg?updatedAt=1723287160800', category: 'Tech' },
//   { id: 9, title: 'Sports Event', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg13.jpg?updatedAt=1723287162757', category: 'Sports' },
//   { id: 10, title: 'Film Screening', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg15.jpg?updatedAt=1723287171496', category: 'Film' },
// ];

// const Events = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [activeButton, setActiveButton] = useState(null);
//   const navigate = useNavigate();

//   const filteredEvents = allEvents.filter(event => {
//     const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const displayedEvents = filteredEvents.length > 8 ? filteredEvents.slice(0, 8) : filteredEvents;

//   const handleBookNowClick = (eventId) => {
//     setActiveButton(eventId);
//     setTimeout(() => {
//       navigate('/eventBook');
//     }, 300);
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen py-10 px-5">
//       <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>

//       <div className="mb-8 flex justify-center">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-md p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//         />
//       </div>

//       <div className="mb-8 flex justify-center gap-4 flex-wrap">
//         {['All', 'Birthday', 'Wedding', 'Concert', 'Corporate', 'Art', 'Charity', 'Food', 'Tech', 'Sports', 'Film'].map(category => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`py-2 px-4 rounded-lg ${selectedCategory === category ? 'bg-red-600' : 'bg-gray-800'} text-white`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="flex overflow-x-auto snap-x snap-mandatory py-4 space-x-4">
//         {displayedEvents.length === 0 ? (
//           <p className="text-center text-gray-400 w-full">No events found.</p>
//         ) : (
//           displayedEvents.map((event) => (
//             <div
//               key={event.id}
//               className="relative w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
//             >
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-5 flex flex-col flex-grow">
//                 <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
//                 <div className="mt-auto">
//                   <button
//                     onClick={() => handleBookNowClick(event.id)}
//                     className={`inline-block ${activeButton === event.id ? 'bg-black' : 'bg-red-600'} text-white py-2 px-4 rounded-lg shadow hover:bg-red-700 transition-colors duration-300 w-full text-center`}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//               <div
//                 className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 transition-opacity duration-300 hover:opacity-60"
//                 aria-hidden="true"
//               />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Events;



// import { useState } from 'react';


// const allEvents = [
//   { id: 1, title: 'Birthday Party', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg17.webp?updatedAt=1723287414849', category: 'Birthday' },
//   { id: 2, title: 'Wedding Ceremony', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg19.avif?updatedAt=1723288078531', category: 'Wedding' },
//   { id: 3, title: 'Concert Night', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg6.jpg?updatedAt=1723224418728', category: 'Concert' },
//   { id: 4, title: 'Corporate Meeting', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg20.avif?updatedAt=1723288421692', category: 'Corporate' },
//   { id: 5, title: 'Art Exhibition', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg10.jpg?updatedAt=1723287163122', category: 'Art' },
//   { id: 6, title: 'Charity Gala', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg11.jpg?updatedAt=1723287163260', category: 'Charity' },
//   { id: 7, title: 'Food Festival', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg12.jpg?updatedAt=1723287163255', category: 'Food' },
//   { id: 8, title: 'Tech Conference', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg9.jpg?updatedAt=1723287160800', category: 'Tech' },
//   { id: 9, title: 'Sports Event', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg13.jpg?updatedAt=1723287162757', category: 'Sports' },
//   { id: 10, title: 'Film Screening', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg15.jpg?updatedAt=1723287171496', category: 'Film' },
// ];

// const Events = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
 

//   const filteredEvents = allEvents.filter(event => {
//     const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const displayedEvents = filteredEvents.length > 8 ? filteredEvents.slice(0, 8) : filteredEvents;

  
//   return (
//     <div className="bg-gray-900 text-white min-h-screen py-10 px-5">
//       <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>

//       <div className="mb-8 flex justify-center">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-md p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//         />
//       </div>

//       <div className="mb-8 flex justify-center gap-4 flex-wrap">
//         {['All', 'Birthday', 'Wedding', 'Concert', 'Corporate', 'Art', 'Charity', 'Food', 'Tech', 'Sports', 'Film'].map(category => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`py-2 px-4 rounded-lg ${selectedCategory === category ? 'bg-red-600' : 'bg-gray-800'} text-white`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="flex overflow-x-auto snap-x snap-mandatory py-4 space-x-4">
//         {displayedEvents.length === 0 ? (
//           <p className="text-center text-gray-400 w-full">No events found.</p>
//         ) : (
//           displayedEvents.map((event) => (
//             <div
//               key={event.id}
//               className="relative w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
//             >
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-5 flex flex-col flex-grow">
//                 <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
//                 <div className="mt-auto">
                  


//                 </div>
//               </div>
//               <div
//                 className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"
//                 aria-hidden="true"
//               />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Events;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const allEvents = [
//   { id: 1, title: 'Birthday Party', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg17.webp?updatedAt=1723287414849', category: 'Birthday' },
//   { id: 2, title: 'Wedding Ceremony', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg19.avif?updatedAt=1723288078531', category: 'Wedding' },
//   { id: 3, title: 'Concert Night', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg6.jpg?updatedAt=1723224418728', category: 'Concert' },
//   { id: 4, title: 'Corporate Meeting', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg20.avif?updatedAt=1723288421692', category: 'Corporate' },
//   { id: 5, title: 'Art Exhibition', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg10.jpg?updatedAt=1723287163122', category: 'Art' },
//   { id: 6, title: 'Charity Gala', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg11.jpg?updatedAt=1723287163260', category: 'Charity' },
//   { id: 7, title: 'Food Festival', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg12.jpg?updatedAt=1723287163255', category: 'Food' },
//   { id: 8, title: 'Tech Conference', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg9.jpg?updatedAt=1723287160800', category: 'Tech' },
//   { id: 9, title: 'Sports Event', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg13.jpg?updatedAt=1723287162757', category: 'Sports' },
//   { id: 10, title: 'Film Screening', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg15.jpg?updatedAt=1723287171496', category: 'Film' },
// ];

// const Events = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const navigate = useNavigate();

//   const filteredEvents = allEvents.filter(event => {
//     const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const displayedEvents = filteredEvents.length > 8 ? filteredEvents.slice(0, 8) : filteredEvents;

//   const handleCardClick = (eventId) => {
//     navigate(`/eventsBook/${eventId}`);
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen py-10 px-5">
//       <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>

//       <div className="mb-8 flex justify-center">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-md p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//         />
//       </div>

//       <div className="mb-8 flex justify-center gap-4 flex-wrap">
//         {['All', 'Birthday', 'Wedding', 'Concert', 'Corporate', 'Art', 'Charity', 'Food', 'Tech', 'Sports', 'Film'].map(category => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`py-2 px-4 rounded-lg ${selectedCategory === category ? 'bg-red-600' : 'bg-gray-800'} text-white`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="flex overflow-x-auto snap-x snap-mandatory py-4 space-x-4">
//         {displayedEvents.length === 0 ? (
//           <p className="text-center text-gray-400 w-full">No events found.</p>
//         ) : (
//           displayedEvents.map((event) => (
//             <div
//               key={event.id}
//               className="relative w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer"
//               onClick={() => handleCardClick(event.id)}
//             >
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-5 flex flex-col flex-grow">
//                 <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
//                 <div className="mt-auto">
//                   {/* You can add more details here if needed */}
//                 </div>
//               </div>
//               <div
//                 className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"
//                 aria-hidden="true"
//               />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Events;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const allEvents = [
//   { id: 1, title: 'Birthday Party', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg17.webp?updatedAt=1723287414849', category: 'Birthday' },
//   { id: 2, title: 'Wedding Ceremony', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg19.avif?updatedAt=1723288078531', category: 'Wedding' },
//   { id: 3, title: 'Concert Night', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg6.jpg?updatedAt=1723224418728', category: 'Concert' },
//   { id: 4, title: 'Corporate Meeting', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg20.avif?updatedAt=1723288421692', category: 'Corporate' },
//   { id: 5, title: 'Art Exhibition', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg10.jpg?updatedAt=1723287163122', category: 'Art' },
//   { id: 6, title: 'Charity Gala', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg11.jpg?updatedAt=1723287163260', category: 'Charity' },
//   { id: 7, title: 'Food Festival', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg12.jpg?updatedAt=1723287163255', category: 'Food' },
//   { id: 8, title: 'Tech Conference', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg9.jpg?updatedAt=1723287160800', category: 'Tech' },
//   { id: 9, title: 'Sports Event', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg13.jpg?updatedAt=1723287162757', category: 'Sports' },
//   { id: 10, title: 'Film Screening', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg15.jpg?updatedAt=1723287171496', category: 'Film' },
// ];

// const Events = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const navigate = useNavigate();

//   const filteredEvents = allEvents.filter(event => {
//     const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const displayedEvents = filteredEvents.length > 8 ? filteredEvents.slice(0, 8) : filteredEvents;

//   const handleCardClick = (id) => {
//     navigate('/eventsBook', { state: { eventId: id } }); // Passing event ID to the new page
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen py-10 px-5">
//       <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>

//       <div className="mb-8 flex justify-center">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-md p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//         />
//       </div>

//       <div className="mb-8 flex justify-center gap-4 flex-wrap">
//         {['All', 'Birthday', 'Wedding', 'Concert', 'Corporate', 'Art', 'Charity', 'Food', 'Tech', 'Sports', 'Film'].map(category => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`py-2 px-4 rounded-lg ${selectedCategory === category ? 'bg-red-600' : 'bg-gray-800'} text-white`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="flex overflow-x-auto snap-x snap-mandatory py-4 space-x-4">
//         {displayedEvents.length === 0 ? (
//           <p className="text-center text-gray-400 w-full">No events found.</p>
//         ) : (
//           displayedEvents.map((event) => (
//             <div
//               key={event.id}
//               className="relative w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//               onClick={() => handleCardClick(event.id)}
//             >
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-5 flex flex-col flex-grow">
//                 <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
//               </div>
//               <div
//                 className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"
//                 aria-hidden="true"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white p-3 text-center">
//                 <button
//                   onClick={() => handleCardClick(event.id)}
//                   className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Events;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const allEvents = [
  { id: 1, title: 'Birthday Party', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg17.webp?updatedAt=1723287414849', category: 'Birthday' },
  { id: 2, title: 'Wedding Ceremony', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg19.avif?updatedAt=1723288078531', category: 'Wedding' },
  { id: 3, title: 'Concert Night', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg6.jpg?updatedAt=1723224418728', category: 'Concert' },
  { id: 4, title: 'Corporate Meeting', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg20.avif?updatedAt=1723288421692', category: 'Corporate' },
  { id: 5, title: 'Art Exhibition', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg10.jpg?updatedAt=1723287163122', category: 'Art' },
  { id: 6, title: 'Charity Gala', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg11.jpg?updatedAt=1723287163260', category: 'Charity' },
  { id: 7, title: 'Food Festival', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg12.jpg?updatedAt=1723287163255', category: 'Food' },
  { id: 8, title: 'Tech Conference', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg9.jpg?updatedAt=1723287160800', category: 'Tech' },
  { id: 9, title: 'Sports Event', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg13.jpg?updatedAt=1723287162757', category: 'Sports' },
  { id: 10, title: 'Film Screening', image: 'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg15.jpg?updatedAt=1723287171496', category: 'Film' },
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedEvents = filteredEvents.length > 8 ? filteredEvents.slice(0, 8) : filteredEvents;

  const handleCardClick = (id) => {
    navigate('/eventsBook', { state: { eventId: id } }); // Passing event ID to the new page
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-8 flex justify-center gap-4 flex-wrap">
        {['All', 'Birthday', 'Wedding', 'Concert', 'Corporate', 'Art', 'Charity', 'Food', 'Tech', 'Sports', 'Film'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 rounded-lg ${selectedCategory === category ? 'bg-red-600' : 'bg-gray-800'} text-white`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory py-4 space-x-4">
        {displayedEvents.length === 0 ? (
          <p className="text-center text-gray-400 w-full">No events found.</p>
        ) : (
          displayedEvents.map((event) => (
            <div
              key={event.id}
              className="relative w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
              onClick={() => handleCardClick(event.id)}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-4">{event.title}</h2>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gray-900 text-white">
                <button
                  onClick={() => handleCardClick(event.id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Events;
