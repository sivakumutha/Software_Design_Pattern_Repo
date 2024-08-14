// import React from 'react'
import { Avatar, AvatarFallback,} from '../ui/avatar'
import { ModeToggle } from '../mode-toggle'

const Upbar = () => {
    return (
        <div className='h-[6vh] w-full flex justify-center items-center shadow-sm shadow-primary'>
            <div className='w-[95%] h-full flex items-center justify-end gap-4'>
                <ModeToggle/>
                <Avatar>
                    {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
                    <AvatarFallback>SR</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Upbar


// import React from 'react';
// import { Bell, User } from 'lucide-react';

// const Upbar = () => {
//   return (
//     <div className='bg-gray-800 text-white flex items-center justify-between p-4 shadow-md'>
//       <div className='flex items-center'>
//         <img 
//           src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
//           alt="Event Logo" 
//           className="w-12 h-auto"
//         />
//         <span className='ml-2 text-xl font-bold'>Admin Dashboard</span>
//       </div>
//       <div className='relative'>
//         <input 
//           type="text" 
//           placeholder="Search..."
//           className='bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none'
//         />
//         <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
//           🔍
//         </span>
//       </div>
//       <div className='flex items-center gap-4'>
//         <button className='relative'>
//           <Bell size={20} />
//           <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1'>3</span>
//         </button>
//         <button className='flex items-center'>
//           <User size={20} />
//           <span className='ml-2'>Profile</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Upbar;
