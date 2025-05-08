import React from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Dasbord = () => {
    return (
        <>
            <div className='bg-blue-900'>
                <Navbar />
                <div className='flex'>
                    <Sidebar />
                    <div className='flex-1 p-4 text-white'>
                        {/* Main Content goes here */}
                        <h1 className='text-2xl font-bold'>Welcome to Dasbord</h1>
                    </div>
                </div>
            </div>

        </>
    );
};


export default Dasbord;
