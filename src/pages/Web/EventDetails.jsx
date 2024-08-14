


import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming you have these components

const EventDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  
  // Ensure state is available
  if (!state || !state.event) {
    return <div className="p-4">No event details available.</div>;
  }

  const { name, phone, email, eventTitle, eventDate, eventLocation, date } = state.event;

  const handleOkClick = () => {
    navigate('/pay'); // Replace '/events' with the actual path to your events page
  };

  return (
    <div className="h-full w-full flex justify-center items-center p-4">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex flex-col space-y-1.5">
              <label className="font-bold">Name:</label>
              <p>{name}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="font-bold">Phone:</label>
              <p>{phone}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="font-bold">Email:</label>
              <p>{email}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="font-bold">Event Title:</label>
              <p>{eventTitle}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="font-bold">Event Date:</label>
              <p>{eventDate}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="font-bold">Event Location:</label>
              <p>{eventLocation}</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="font-bold">Submission Date:</label>
              <p>{date}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button 
              onClick={handleOkClick}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
            >
              OK
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventDetails;

