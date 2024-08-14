


// import { NavLink } from "react-router-dom";
// import { ModeToggle } from "../mode-toggle";

// const Navbar = () => {
//     const LinksData = [
//         {
//             title: 'Login',
//             link: '/register'
//         }
//     ];

//     return (
//         <div className='w-full h-[8vh] flex items-center'>
//             {/* Logo Section */}
//             <div className='h-full w-1/4 flex items-center text-2xl font-bold text-primary'>
//                 <img 
//                     src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
//                     alt="Event Logo" 
//                     className="h-full"
//                 />
//             </div>
//             {/* Links and ModeToggle */}
//             <div className='h-full w-3/4 flex justify-end items-center gap-6 pr-8'>
//                 {
//                     LinksData.map((data, index) => (
//                         <li key={index} className="list-none">
//                             <NavLink className='text-primary' to={data.link}>
//                                 {data.title}
//                             </NavLink>
//                         </li>
//                     ))
//                 }
//                 <ModeToggle />
//             </div>
//         </div>
//     );
// }

// export default Navbar;


import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { FaUserPlus } from 'react-icons/fa'; // Importing signup icon from react-icons

const Navbar = () => {
    const LinksData = [
        {
            title: 'Sign Up',
            link: '/register',
            icon: <FaUserPlus /> // Adding signup icon
        }
    ];

    return (
        <div className='w-full h-[8vh] flex items-center'>
            {/* Logo Section */}
            <div className='h-full w-1/4 flex items-center text-2xl font-bold text-primary'>
                <img 
                    src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
                    alt="Event Logo" 
                    className="h-full"
                />
            </div>
            {/* Links and ModeToggle */}
            <div className='h-full w-3/4 flex justify-end items-center gap-6 pr-8'>
                {
                    LinksData.map((data, index) => (
                        <li key={index} className="list-none flex items-center gap-3"> {/* Increased gap */}
                            <NavLink className='text-primary flex items-center' to={data.link}>
                                {data.icon} {/* Display the icon */}
                                <span className="ml-2">{data.title}</span> {/* Added margin-left for additional space */}
                            </NavLink>
                        </li>
                    ))
                }
                <ModeToggle />
            </div>
        </div>
    );
}

export default Navbar;
