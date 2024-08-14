// import Leftbar from '@/components/Admin/Leftbar'
// import Topbar from '@/components/Admin/Topbar'
import Sidebar from '@/components/User/Sidebar'
import Upbar from '@/components/User/Upbar'
// import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <Sidebar/>
      <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
        <Upbar/>
        
        <div className='h-[92vh] w-full'>
        <Outlet/>
        </div>
        
      </div>
    </div>
  )
}

export default AdminLayout