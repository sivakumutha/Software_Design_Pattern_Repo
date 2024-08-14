import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        // Add form submission logic here
    };

    const handleOk = () => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
        navigate('/admin/dashboard');  // Navigate to the admin users page
    };

    return (
        <div className="min-h-screen flex flex-col items-center pt-12 p-4 bg-gray-100">
            <header className="mb-6">
                <h1 className="text-3xl font-bold">Contact Us</h1>
            </header>
            {submitted ? (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Thank you for contacting us!</h2>
                    <p className="text-lg mb-6">We will get back to you soon.</p>
                    <button
                        onClick={handleOk}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                        OK
                    </button>
                </div>
            ) : (
                <form className="bg-white p-6 rounded shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                            rows="4"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                        Send Message
                    </button>
                </form>
            )}
        </div>
    );
}

export default ContactUs;
