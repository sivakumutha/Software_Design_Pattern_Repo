// import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ModeToggle } from '../mode-toggle'

const Topbar = () => {
    return (
        <div className='h-[8vh] w-full bg-primary/5 flex justify-center items-center'>
            <div className='w-[90%] flex items-center justify-end gap-4'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcxn.png" alt="@shadcn"/>
                    <AvatarFallback>SR</AvatarFallback>
                </Avatar>
                <ModeToggle/>
            </div>
        </div>
    )
}

export default Topbar