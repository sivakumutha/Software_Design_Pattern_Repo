// src/components/Admin/EventManagement.jsx
import  { useState, useEffect } from 'react';
import axios from 'axios';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events'); // Replace with your API endpoint
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/events/${id}`); // Replace with your API endpoint
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Event Management</h1>
      <button className='bg-blue-500 text-white py-2 px-4 rounded mb-4'>
        Add New Event
      </button>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th className='border p-2'>Title</th>
            <th className='border p-2'>Date</th>
            <th className='border p-2'>Location</th>
            <th className='border p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td className='border p-2'>{event.title}</td>
              <td className='border p-2'>{event.date}</td>
              <td className='border p-2'>{event.location}</td>
              <td className='border p-2'>
                <button className='bg-yellow-500 text-white py-1 px-2 rounded'>Edit</button>
                <button 
                  className='bg-red-500 text-white py-1 px-2 rounded ml-2'
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventManagement;
