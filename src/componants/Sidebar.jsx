import React from 'react';
import { FaUserGroup, FaUserDoctor } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { IoPieChartSharp, IoSettings } from "react-icons/io5";
import { FcDepartment } from "react-icons/fc";
import { TbChartHistogram } from "react-icons/tb";


const Sidebar = () => {
    return (
        <div className='border absolute w-60 top-[66px] bottom-0 left-0 bg-green-200'>
            <ul className='flex flex-col text-xl gap-6 p-4'>
                <li className='flex items-center gap-3'>
                    <FaUserGroup />
                    <span>Patients</span>
                </li>
                <li className='flex items-center gap-3'>
                    <IoPieChartSharp />
                    <span>Overview</span>
                </li>
                <li className='flex items-center gap-3'>
                    <FiMapPin />
                    <span>Map</span>
                </li>
                <li className='flex items-center gap-3'>
                    <FcDepartment />
                    <span>Departments</span>
                </li>
                <li className='flex items-center gap-3'>
                    <FaUserDoctor />
                    <span>Doctors</span>
                </li>
                <li className='flex items-center gap-3'>
                <TbChartHistogram />

                    <span>History</span>
                </li>
                <li className='flex items-center gap-3'>
                    <IoSettings />
                    <span>Settings</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
