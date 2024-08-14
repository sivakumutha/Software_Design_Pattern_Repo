// src/components/Admin/BookingManagement.jsx
import  { useState, useEffect } from 'react';
import axios from 'axios';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/bookings'); // Replace with your API endpoint
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = async (id) => {
    try {
      await axios.delete(`/api/bookings/${id}`); // Replace with your API endpoint
      setBookings(bookings.filter(booking => booking.id !== id));
    } catch (error) {
      console.error('Error canceling booking:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Booking Management</h1>
      <button className='bg-blue-500 text-white py-2 px-4 rounded mb-4'>
        Add New Booking
      </button>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th className='border p-2'>Event</th>
            <th className='border p-2'>User</th>
            <th className='border p-2'>Date</th>
            <th className='border p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td className='border p-2'>{booking.event}</td>
              <td className='border p-2'>{booking.user}</td>
              <td className='border p-2'>{booking.date}</td>
              <td className='border p-2'>
                <button className='bg-yellow-500 text-white py-1 px-2 rounded'>Edit</button>
                <button 
                  className='bg-red-500 text-white py-1 px-2 rounded ml-2'
                  onClick={() => handleCancel(booking.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingManagement;
