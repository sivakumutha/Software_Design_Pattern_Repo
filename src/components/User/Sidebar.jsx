import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, LogOut } from 'lucide-react'; // Imported icons

const Sidebar = () => {
    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/adminpage',
            icon: LayoutDashboard
        },
        {
            title: 'User',
            link: '/userpage',
            icon: User
        },
        {
            title: 'Events List',
            link: '/userpage',
            icon: User
        }
    ];

    return (
        <div className='h-screen w-1/6 flex flex-col'>
            {/* Logo Image */}
            <div className='mb-10 flex justify-center items-center'>
                <img 
                    src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
                    alt="Event Logo" 
                    className="w-24 h-auto"
                />
            </div>
            {/* Admin Links */}
            <div className='flex flex-col flex-grow'>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink 
                            key={index} 
                            to={data.link} 
                            className={`p-5 border-b-4 border-gray-500 hover:border-primary font-bold flex items-center gap-2 ${index < AdminLinks.length - 1 ? 'mb-4' : ''}`} // Added margin-bottom
                        >
                            {React.createElement(data.icon, { size: 20 })}
                            <span className='ml-2'>{data.title}</span>
                        </NavLink>
                    ))
                }
            </div>
            {/* Logout Button */}
            <div className='p-5 border-t-4 border-gray-500 hover:border-primary font-bold flex items-center gap-2'>
                <NavLink 
                    to='/login' // Adjust the link if needed
                    className='flex items-center gap-2'
                >
                    <LogOut size={20} />
                    <span className='ml-2'>Logout</span>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { LayoutDashboard, User, LogOut } from 'lucide-react';

// const Sidebar = () => {
//   const AdminLinks = [
//     { title: 'Dashboard', link: '/admin', icon: LayoutDashboard },
//     { title: 'Events', link: '/admin/events', icon: LayoutDashboard },
//     { title: 'Users', link: '/admin/users', icon: User },
//     { title: 'Bookings', link: '/admin/bookings', icon: LayoutDashboard },
//     { title: 'Feedback', link: '/admin/feedback', icon: LayoutDashboard },
//     { title: 'Contact', link: '/admin/contact', icon: LayoutDashboard },
//     { title: 'Reports', link: '/admin/reports', icon: LayoutDashboard },
//     { title: 'Settings', link: '/admin/settings', icon: LayoutDashboard }
//   ];

//   return (
//     <div className='h-screen w-1/6 bg-gray-800 text-white flex flex-col'>
//       <div className='mb-10 flex justify-center items-center'>
//         <img 
//           src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
//           alt="Event Logo" 
//           className="w-24 h-auto"
//         />
//       </div>
//       <nav className='flex flex-col flex-grow'>
//         {AdminLinks.map((data, index) => (
//           <NavLink 
//             key={index} 
//             to={data.link} 
//             className={`p-5 border-b-4 border-gray-500 hover:border-primary font-bold flex items-center gap-2 ${index < AdminLinks.length - 1 ? 'mb-4' : ''}`}
//           >
//             {React.createElement(data.icon, { size: 20 })}
//             <span className='ml-2'>{data.title}</span>
//           </NavLink>
//         ))}
//       </nav>
//       <div className='p-5 border-t-4 border-gray-500 hover:border-primary font-bold flex items-center gap-2'>
//         <NavLink to='/login' className='flex items-center gap-2'>
//           <LogOut size={20} />
//           <span className='ml-2'>Logout</span>
//         </NavLink>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
