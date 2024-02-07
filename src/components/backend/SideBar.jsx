import Link from 'next/link';
import React from 'react';

const SideBar = () => {
    return (
        <div className='fixed top-0 left-0 text-gray-400 bg-slate-900 space-y-6 w-60 h-full p-3'>
            <Link href="#"> Logo </Link>
            <div className='flex flex-col space-y-3'>
            <Link href="/dashboard"> Dashboard </Link>

            {/* Office related menu */}
            <Link href="#"> Member </Link>
            <Link href="#"> Teacher </Link>
            <Link href="/dashboard/students"> Student </Link>
            <Link href="#"> Employe </Link>

            {/* students related menu */}
            <Link href="#"> Invoice </Link>
            <Link href="#"> Attendence </Link>
            <Link href="#"> Result </Link>
            <Link href="#"> Report </Link>
            <Link href="#"> Routine </Link>
            <Link href="#"> Admit Card </Link>

            
             {/* post related menu */}
            <Link href="#"> Post </Link>
            <Link href="#"> Notice </Link>
            <Link href="#"> Holiday </Link>
            <Link href="#"> Complain </Link>

            {/* payment related menu */}
            <Link href="#"> Salary </Link>
            <Link href="#"> Revenue </Link>
            <Link href="#"> Expenses </Link>
            <Link href="#"> Send SMS </Link>
            <Link href="#"> Profile </Link>
            <Link href="#"> Download </Link>

            {/* front-end section */}
            <Link href="#"> Video </Link>
            <Link href="#"> Photo </Link>
            <Link href="#"> Slider  </Link>
            <Link href="#"> Media  </Link>
            <Link href="#"> Comments  </Link>
            <Link href="#"> News  </Link>
            </div>
        </div>
    );
};

export default SideBar;