// import React from "react";
// import { Link } from 'react-router-dom';

// const destinations = [
//   {
//     id: 1,
//     name: 'Birthday',
//     label: 'Register Now',
//     image: 'https://www.table-art.co.uk/wp-content/uploads/2018/04/1136px-x-675px-peachy-image.jpg',
//   },
//   {
//     id: 2,
//     name: 'Stage Performance',
//     label: 'Register Now',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DlTgePcsSpIAd-y63Fx-gUKMNbjnQkkb4e7H7jJfZprlD2lYg2pkh2kJ67N71fwWeVc&usqp=CAU',
//   },
//   {
//     id: 3,
//     name: 'Disco',
//     label: 'Register Now',
//     image: 'https://www.shutterstock.com/image-photo/blur-night-club-have-party-260nw-573239401.jpg',
//   },
//   {
//     id: 4,
//     name: 'Party',
//     label: 'Register Now',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcL1RLFEzrUEfUgu7xkLMtKJsIrya6fzoQ8ELWKvOZoK7gIzSnam3fq3W1QhYJ0OdiT1s&usqp=CAU',
//   },
//   {
//     id: 5,
//     name: 'Wedding',
//     label: 'Register Now',
//     image: 'https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg',
//   },
//   {
//     id: 6,
//     name: 'DJ Nights',
//     label: 'Register Now',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8BowtVVFfWUn52DjJyDtMd1-RgKMufS_6Q&usqp=CAU',
//   },
// ];

// const Header = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-4">
//       <main className="container mx-auto px-4">
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
//           {destinations.slice(0, 3).map((destination) => (
//             <div
//               key={destination.id}
//               className="w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
//             >
//               <img
//                 className="w-full h-48 object-cover"
//                 src={destination.image}
//                 alt={destination.name}
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{destination.name}</h2>
//                 <Link to="/sig">
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
//                     {destination.label}
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
//           {destinations.slice(3).map((destination) => (
//             <div
//               key={destination.id}
//               className="w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
//             >
//               <img
//                 className="w-full h-48 object-cover"
//                 src={destination.image}
//                 alt={destination.name}
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{destination.name}</h2>
//                 <Link to="/sig">
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
//                     {destination.label}
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Header;










// import React from "react";

// const imageData = [
//   {
//     url: "https://www.table-art.co.uk/wp-content/uploads/2018/04/1136px-x-675px-peachy-image.jpg",
//     text: "Birthday",
//   },
//   {
//       url: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg",
//       text: "Wedding",
//     },
//     {
//         url: "https://media.licdn.com/dms/image/D4D12AQFxuo8CWk6qIg/article-cover_image-shrink_720_1280/0/1681980612057?e=2147483647&v=beta&t=3UqUyScRpe57OfnfM_R1IiYRfooYgHhNCKykNPGVYeI",
//         text: "conference",
//       },
//       {
//           url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcL1RLFEzrUEfUgu7xkLMtKJsIrya6fzoQ8ELWKvOZoK7gIzSnam3fq3W1QhYJ0OdiT1s&usqp=CAU",
//           text: "Party",
//   },
//   {
//     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8BowtVVFfWUn52DjJyDtMd1-RgKMufS_6Q&usqp=CAU",
//     text: "DJ",
//   },
// ];

// function Events() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 m-0 overflow-hidden">
//       <div className="flex gap-4 perspective-1000">
//         {imageData.map((item, index) => (
//           <div
//             key={index}
//             className="relative w-52 h-72 bg-cover bg-center cursor-pointer transition-transform duration-500 flex justify-center items-center text-white text-xl font-bold"
//             style={{ backgroundImage: `url(${item.url})` }}
//             data-text={item.text}
//           >
//             <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-2.5 rounded-md">
//               {item.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Events;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Main Content */}
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="flex flex-col justify-center items-center h-screen bg-neutral-900 text-white p-8">
//           <div className="text-center">
//             <h2 className="text-5xl font-extrabold mb-4">Welcome to the Event Organizer Portal</h2>
//             <p className="text-lg mb-6">Your partner in creating memorable and successful events</p>
//             <Link
//               to="/register"
//               className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
//             >
//               Start Organizing
//             </Link>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section className="py-16 bg-gray-100">
//           <div className="max-w-5xl mx-auto px-6">
//             <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Services</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-900">Event Planning</h3>
//                 <p className="text-gray-700">Comprehensive event planning to ensure every detail is perfectly executed.</p>
//               </div>
//               <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-900">Venue Selection</h3>
//                 {/* eslint-disable-next-line react/no-unescaped-entities */}
//                 <p className="text-gray-700">Finding and securing the ideal venue tailored to your event's requirements.</p>
//               </div>
//               <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-900">Catering Services</h3>
//                 <p className="text-gray-700">Delicious and diverse catering options to satisfy your guests.</p>
//               </div>
//               <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-900">Entertainment</h3>
//                 <p className="text-gray-700">A range of entertainment options to keep your event engaging and memorable.</p>
//               </div>
//               <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-900">Decoration</h3>
//                 {/* eslint-disable-next-line react/no-unescaped-entities */}
//                 <p className="text-gray-700">Beautiful and thematic decorations to enhance your event's ambiance.</p>
//               </div>
//               <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-900">Logistics</h3>
//                 <p className="text-gray-700">Efficient logistics management to ensure everything runs smoothly.</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Home;


// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Main Content */}
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section
//           className="flex flex-col justify-center items-center h-screen bg-cover bg-center text-white p-8"
//           style={{
//             backgroundImage: `url('https://ik.imagekit.io/yzjvopjsjb/Home/event-work-1.jpg?updatedAt=1723225889159')`
//           }}
//         >
//           <div className="text-center">
//             <h2 className="text-5xl font-extrabold mb-4">Welcome to Planify</h2>
//             <p className="text-lg mb-6">Your partner in creating memorable and successful events</p>
//             <Link
//               to="/events"
//               className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
//             >
//               Start Organizing
//             </Link>
//           </div>
//         </section>

//         {/* Services Section */}
       
//       </main>
//     </div>
//   );
// };

// export default Home;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const images = [
  'https://ik.imagekit.io/yzjvopjsjb/Home/eveimage.jpg?updatedAt=1722192397327',
  'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg8.jpg?updatedAt=1723224417106',
  'https://ik.imagekit.io/yzjvopjsjb/Home/eventimg5.jpg?updatedAt=1723136626245',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h2 className="text-4xl font-extrabold mb-4">Welcome to Planify</h2>
            <p className="text-lg mb-6">Your partner in creating memorable and successful events</p>
            <Link
              to="/register"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Start Organizing
            </Link>
          </div>
        </div>
      </div>

      {/* Removed the S-Shaped Curve Divider */}
    </div>
  );
};

export default Home;

