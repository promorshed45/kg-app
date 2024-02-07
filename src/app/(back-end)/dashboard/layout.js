import NavBar from '@/components/backend/NavBar';
import SideBar from '@/components/backend/SideBar';
import { Inter } from 'next/font/google';
import React from 'react';
const inter = Inter({ subsets: ["latin"] });

const layout = ({children}) => {
    return (
        <div className='flex'>
            {/* Side Bar */}
            <SideBar/>
            <div className='w-full'>
                {/* Header */}
                <NavBar/>
                {/* Main */}
                <main className='ml-60 p-8 bg-slate-950 text-slate-50 min-h-screen mt-16'>
                {children}
                </main>
            </div>
            {/* Main Body */}
        </div>
    );
};

export default layout;