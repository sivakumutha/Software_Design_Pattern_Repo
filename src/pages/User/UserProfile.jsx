// import React from 'react';

const UserProfile = () => {
    // Mock user data
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890'
    };

    return (
        <div className="bg-white shadow-md rounded p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
        </div>
    );
};

export default UserProfile;
