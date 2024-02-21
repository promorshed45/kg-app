'use client';

import { useState } from "react";



const Navigation = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div className={`bg-gray-800 text-white h-screen z-50 transition-all duration-300 ease-in-out ${collapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex items-center justify-between p-4 bg-yellow-500">
                {!collapsed && (
                    <span className="flex font-bold text-xl bg-red-500">Your Logo</span>
                )}
                <button onClick={toggleCollapse} className="text-2xl focus:outline-none">
                    {collapsed ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            <nav>
                <ul>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;