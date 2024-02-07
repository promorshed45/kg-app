import React from 'react';
import { FaUserGraduate, FaUsers } from 'react-icons/fa';
import { FaUserGear, FaUserGroup } from 'react-icons/fa6';
import { LuUser2 } from 'react-icons/lu';

const StateOne = () => {
    const icons = {
        "student": <FaUsers />,
        "teacher": <FaUserGraduate />,
        "employee": <FaUserGear />,
        "member": <FaUserGroup />

    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10'>
            {info.map((item, index)=>(
                <div key={index} className={`text-gray-100 rounded-lg  ${item.color} flex flex-col p-6 gap-2 items-center justify-center`}>
                <span className='text-4xl '>{icons[item.icon]}</span>
                <h1 className='text-2xl font-medium'> {item.title} </h1>
                <h1 className='text-2xl'> {item.count} </h1>
            </div>
            ))}
        </div>
    );
};

export default StateOne;

const info = [
    {
        title: "Total Teacher",
        count: "15",
        color: 'bg-green-500',
        icon: "teacher"

    },
    {
        title: "Total Student",
        count: "550",
        color: 'bg-blue-500',
        icon: "student"
    },
    {
        title: "Total Member",
        count: "10",
        color: 'bg-rose-500',
        icon: "member"
    },
    {
        title: "Total Employee",
        count: "15",
        color: 'bg-violet-500',
        icon: "employee"
    }
]