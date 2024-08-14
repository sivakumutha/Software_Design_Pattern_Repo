// src/components/Admin/UserManagement.jsx
import  { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users'); // Replace with your API endpoint
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`); // Replace with your API endpoint
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>User Management</h1>
      <button className='bg-blue-500 text-white py-2 px-4 rounded mb-4'>
        Add New User
      </button>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th className='border p-2'>Name</th>
            <th className='border p-2'>Email</th>
            <th className='border p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className='border p-2'>{user.name}</td>
              <td className='border p-2'>{user.email}</td>
              <td className='border p-2'>
                <button className='bg-yellow-500 text-white py-1 px-2 rounded'>Edit</button>
                <button 
                  className='bg-red-500 text-white py-1 px-2 rounded ml-2'
                  onClick={() => handleDelete(user.id)}
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

export default UserManagement;
