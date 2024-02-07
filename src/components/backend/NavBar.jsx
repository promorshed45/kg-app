import React from 'react';
import { LuAlignJustify, LuBell, LuSun, LuUser } from 'react-icons/lu';

const NavBar = () => {
    return (
        <div className='fixed top-0 left-60 right-0 z-50 overflow-y-auto flex items-center justify-between bg-slate-800 text-slate-50  h-16 px-8 py-4'>
            <button> <LuAlignJustify className='text-2xl'/> </button>
                <div className='flex space-x-3 text-2xl'>
                    <button> <LuSun /> </button>
                    <button> <LuBell /> </button>
                    <button> <LuUser /> </button>
                </div>
        </div>
    );
};

export default NavBar;