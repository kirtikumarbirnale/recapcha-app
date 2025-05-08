import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";



const Navbar = () => {
    return (

        <nav className='absolute top-0 left-0 right-0'>
            <ul className='flex justify-between gap-9 bg-blue-400 py-4 '>
                <li className='font-semibold text-3xl px-4'>H-car</li>
                <div className='flex justify-center items-center bg-white px-4 rounded-lg w-1/2'>
                    <CiSearch />
                    <input type="text" name="" id="" placeholder='Search...' className='w-full rounded-md px-3 outline-none' />
                </div>
                <div className='flex items-center gap-4 px-8'>
                    <IoIosNotifications className='text-2xl' />
                    <h1 className='text-2xl cursor-pointer'>Kirtikumar</h1>
                </div>
            </ul>
        </nav>

    )
}

export default Navbar