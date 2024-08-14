import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate('/admin/dashboard'); // Redirect to Admin Dashboard page
      }, 1000); // Redirect after 1 second
      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [submitted, navigate]);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">We Value Your Feedback</h1>
      <p className="text-lg mb-8">Please rate your experience and leave any comments.</p>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-6 h-6 cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
                onClick={() => setRating(star)}
              >
                <path d="M12 .587l3.668 7.43 8.07 1.174-5.85 5.72 1.378 8.037L12 17.737 5.732 22.948l1.378-8.037-5.85-5.72 8.07-1.174z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
            Comments
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-32 p-2 border border-gray-300 rounded-lg"
            placeholder="Your feedback here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Submit
        </button>

        {submitted && <p className="mt-4 text-green-500">Thank you for your feedback!</p>}
      </form>
    </div>
  );
};

export default Feedback;
