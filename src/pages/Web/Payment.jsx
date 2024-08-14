

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    // Log current input values
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);

    // Simple validation
    if (!cardNumber || !expiryDate || !cvv) {
      alert('Please fill in all fields');
      return;
    }

    // Prepare payment data
    const paymentData = {
      cardNumber,
      expiryDate,
      cvv
    };

    setIsLoading(true);

    try {
      // Log payment data before sending it
      console.log('Sending Payment Data:', paymentData);

      // Send payment data to backend
      const response = await axios.post('http://localhost:8081/api/payment', paymentData);

      // Log the response from the backend
      console.log('Payment Response:', response.data);

      if (response.data.status === 'SUCCESS') {
        setPaymentSuccess(true);
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000); // Delay for 2 seconds
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      alert('An error occurred during payment processing. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (

      <div className="flex flex-col items-center h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20230325/pngtree-wedding-romantic-pink-background-image_2116917.jpg')" }}>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-16">
          <div className="mb-6 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/633/633600.png"
              alt="Payment Icon"
              className="w-20 h-20"
            />
          </div>
          <form className="space-y-4" onSubmit={handlePayment}>
            <div className="space-y-1">
              <label htmlFor="cardNumber" className="block font-semibold">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Enter your card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="expiryDate" className="block font-semibold">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="cvv" className="block font-semibold">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="Enter your CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-md text-white font-semibold ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Pay Now'}
            </button>
            {paymentSuccess && (
              <div className="text-green-500 text-center mt-4">
                Payment Successful! Redirecting to Dashboard...
              </div>
            )}
          </form>
        </div>
      </div>
    
  );
};

export default Payment;
