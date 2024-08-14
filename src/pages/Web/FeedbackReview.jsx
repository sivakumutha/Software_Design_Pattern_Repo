// // src/components/Admin/FeedbackReviews.jsx
// import  { useState, useEffect } from 'react';
// import axios from 'axios';

// const FeedbackReviews = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFeedbacks = async () => {
//       try {
//         const response = await axios.get('/api/feedbacks'); // Replace with your API endpoint
//         setFeedbacks(response.data);
//       } catch (error) {
//         console.error('Error fetching feedbacks:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFeedbacks();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/feedbacks/${id}`); // Replace with your API endpoint
//       setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
//     } catch (error) {
//       console.error('Error deleting feedback:', error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className='p-6'>
//       <h1 className='text-2xl font-bold mb-4'>Feedback & Reviews</h1>
//       <table className='w-full border-collapse'>
//         <thead>
//           <tr>
//             <th className='border p-2'>Name</th>
//             <th className='border p-2'>Feedback</th>
//             <th className='border p-2'>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {feedbacks.map(feedback => (
//             <tr key={feedback.id}>
//               <td className='border p-2'>{feedback.name}</td>
//               <td className='border p-2'>{feedback.message}</td>
//               <td className='border p-2'>
//                 <button 
//                   className='bg-red-500 text-white py-1 px-2 rounded'
//                   onClick={() => handleDelete(feedback.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FeedbackReviews;



// src/components/FeedbackReview.jsx
// import { useFeedback } from '../context/FeedbackContext';

// const FeedbackReview = () => {
//   const { feedback } = useFeedback();

//   return (
//     <div className="flex flex-col items-center min-h-screen p-8 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-4">Feedback Review</h1>
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Your Feedback</h2>
//         <p className="mb-2"><strong>Rating:</strong> {feedback?.rating} Stars</p>
//         <p><strong>Comments:</strong> {feedback?.comment}</p>
//       </div>
//     </div>
//   );
// };

// export default FeedbackReview;
