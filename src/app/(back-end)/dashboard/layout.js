'use client';
import NavBar from '@/components/backend/NavBar';
import Navigation from '@/components/backend/Navigation';
import SideBar from '@/components/backend/SideBar';
import { useState } from 'react';

const Layout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    
    return (
        <div className='flex'>
            {/* Side Bar */}
            {/* <Navigation/> */}
            <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <div className='ml-0 flex-grow bg-slate-100 min-h-screen'>
                {/* Header */}
                <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                {/* Main */}
                <main className='p-8 bg-slate-100 dark:bg-slate-950 dark:text-slate-50 min-h-screen mt-14 md:mt-16'>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;

