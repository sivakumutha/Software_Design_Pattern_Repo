
// // import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Web/Home'
// import Login from './pages/Web/Login'
// import Register from './pages/Web/Register'
// import Adminlayout from './layout/Adminlayout'
// import AdminDashboard from './pages/Admin/AdminDashboard'
// import NotFound from './pages/Web/Notfound'
// import Weblayout from './layout/Weblayout'
// import AdminUsers from './pages/Admin/AdminUsers'
// import Events from './pages/Web/Events'
// import EventBookingPage from './pages/Web/EventBookingPage'
// import Proj from './pages/Web/Proj'
// import Client from './pages/Web/Client'
// // import  from './pages/Web/EventTable'
// // import Events from './pages/Web/'




// const App = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route element={<Weblayout/>}>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/login' element={<Login/>} />
//                         <Route path='/register' element={<Register/>} />
//                          <Route path='*' element={<NotFound />} />
//                          {/* <Route path='/eventtable' element={<EventTable/>}/> */}
//                          <Route path='/events' element={<Events/>}/>
//                          <Route path='/eventBook' element={<EventBookingPage/>}/>
//                          <Route path='/proj' element={<Proj/>}/>
//                          <Route path='/client' element={<Client/>}/>
                        
//                     </Route>


//                     <Route element={<Adminlayout/>}>
//                         <Route path='/admin/dashboard' element={<AdminDashboard/>} />
//                         <Route path='/admin/users' element={<AdminUsers/>} />
//                     </Route>

//                 </Routes>
//             </BrowserRouter>


//         </>
//     )
// }


// export default App






// import { useState } from 'react';

// import { BrowserRouter as Router } from 'react-router-dom';

// import EventManagement from './components/User/EventManagement';
// import UserManagement from './components/User/UserManagement';
// import BookingManagement from './components/User/BookingManagement';
// import ContactManagement from './components/User/ContactManagement';
// import ReportsAnalytics from './components/User/ReportsAnalytics';
// import Settings from './components/User/Settings';


{/* Admin Routes */}
{/* <Route path="/admin" element={<Adminlayout />}>

  <Route path= '/admin/events'element={<EventManagement />} />
  <Route path= '/admin/users' element={<UserManagement />} />
  <Route path='/admin/bookings' element={<BookingManagement />} />
  <Route path='/admin/feedback' element={<FeedbackReviews />} />
  <Route path='/admin/contact' element={<ContactManagement />} />
  <Route path='/admin/reports' element={<ReportsAnalytics />} />
  <Route path='/admin/settings' element={<Settings />} />
</Route> */}




import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Web/Home';
import Login from './pages/Web/Login';
import Register from './pages/Web/Register';
import Adminlayout from './layout/Adminlayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import NotFound from './pages/Web/Notfound';
import Weblayout from './layout/Weblayout';
import Userlayout from './layout/Userlayout';
import AdminUsers from './pages/Admin/AdminUsers';
import Events from './pages/Web/Events';
import EventBookingPage from './pages/Web/EventBookingPage';
import Proj from './pages/Web/Proj';
import Client from './pages/Web/Client';
import EventDetails from './pages/Web/EventDetails';
import About from './pages/Web/About';
import Header from './pages/Web/Header';
import UserDashboard from './pages/User/UserDashboard';
// import EventSuccessPage from './pages/Web/EventSuccessPage';
import ContactUs from './pages/Web/ContactUs';
import UserPage from './pages/Web/UserPage';
import AdminPage from './pages/Web/AdminPage';
// import AdminEvents from './pages/Web/AdminEvents';
import Analytics from './pages/Web/Analytics';
import Feedback from './pages/Web/Feedback';
import Payment from './pages/Web/Payment';
import AdminLogin from './pages/Web/AdminLogin';

// import FeedbackReview from './pages/Web/FeedbackReview';


// import { FeedbackProvider } from './context/FeedbackContext';


const App = () => {
    

    return (
        <BrowserRouter>
            <Routes>
                {/* Routes for the web layout */}
                <Route element={<Weblayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/proj' element={<Proj />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/header' element={<Header />} />
                    
                    <Route path='/user/dashboard' element={<UserDashboard />} />
                    <Route path='/eventsBook' element={<EventBookingPage />} />
                    <Route path='/adminlogin' element={<AdminLogin />} />



                    {/* <Route path='/eventBook' element={<EventBookingPage />} /> */}
                    
                    <Route path="/event-details" element={<EventDetails />} />
                
                    <Route path='/client' element={<Client />} />
                    {/* <Route path='/event-success' element={<EventSuccessPage />} /> */}
                    <Route path='/contact' element={<ContactUs />} />
                    <Route path='/analytics' element={<Analytics />} />


                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/pay" element={<Payment />} />
          {/* <Route path="/feedback-review" element={<FeedbackReview />} /> */}
  



                    {/* <Route path="/feedback" element={<Feedback />} /> */}
        {/* <Route path="/thank-you" element={<ThankYou />} /> */}
                </Route>
                {/* Routes for the admin layout */}
                <Route element={<Adminlayout />}>
                    <Route path='/admin/dashboard' element={<AdminDashboard />} />
                    <Route path='/admin/users' element={<AdminUsers />} />
                </Route>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Route element={<Userlayout />}>
                   
                    <Route path='/userpage' element={<UserPage />} />
                    {/* <Route path='/adminevent' element={<AdminEvents />} /> */}
                    <Route path='/adminpage' element={<AdminPage />} />
                </Route>
                {/* Catch-all route for 404 page */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

