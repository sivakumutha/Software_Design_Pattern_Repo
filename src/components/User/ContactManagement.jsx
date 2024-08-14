// src/components/Admin/ContactManagement.jsx
import  { useState, useEffect } from 'react';
import axios from 'axios';

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/api/contacts'); // Replace with your API endpoint
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`); // Replace with your API endpoint
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Contact Management</h1>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th className='border p-2'>Name</th>
            <th className='border p-2'>Email</th>
            <th className='border p-2'>Message</th>
            <th className='border p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td className='border p-2'>{contact.name}</td>
              <td className='border p-2'>{contact.email}</td>
              <td className='border p-2'>{contact.message}</td>
              <td className='border p-2'>
                <button 
                  className='bg-red-500 text-white py-1 px-2 rounded'
                  onClick={() => handleDelete(contact.id)}
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

export default ContactManagement;
