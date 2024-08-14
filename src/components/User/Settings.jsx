// src/components/Admin/Settings.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/settings'); // Replace with your API endpoint
        setSettings(response.data);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const handleSettingsChange = async (e) => {
    const { name, value, type, checked } = e.target;
    const updatedSettings = { ...settings, [name]: type === 'checkbox' ? checked : value };
    
    setSettings(updatedSettings);

    try {
      await axios.put('/api/settings', updatedSettings); // Replace with your API endpoint
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Settings</h1>
      <form>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>
            Theme
            <select 
              name='theme' 
              value={settings.theme} 
              onChange={handleSettingsChange} 
              className='block w-full mt-1 border border-gray-300 rounded p-2'
            >
              <option value='light'>Light</option>
              <option value='dark'>Dark</option>
            </select>
          </label>
        </div>
        <div className='mb-4'>
          <label className='inline-flex items-center'>
            <input 
              type='checkbox' 
              name='notifications' 
              checked={settings.notifications} 
              onChange={handleSettingsChange} 
              className='form-checkbox'
            />
            <span className='ml-2 text-gray-700'>Enable Notifications</span>
          </label>
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 rounded'>Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
