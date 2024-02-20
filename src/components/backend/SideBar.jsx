'use client';
import { BadgeDollarSign, ChevronDown, ChevronRight, LayoutGrid, LucidePanelRightDashed, LucideUserRoundCheck, LucideUsersRound, User2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserGraduate, FaUsers } from 'react-icons/fa';
import { FaUserGear, FaUserGroup } from 'react-icons/fa6';
import { MdCastForEducation } from 'react-icons/md';
import { RiPresentationLine, RiUserSearchLine } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { BsCardChecklist, BsCardList } from 'react-icons/bs';
import { useState } from 'react';
import { LuBadgeDollarSign, LuLayoutDashboard, LuUserPlus } from 'react-icons/lu';
import { Button } from '../ui/button';

const SideBar = ({ showSidebar, setShowSidebar }) => {
    const pathname = usePathname();
    const collapsibleMenu = [
        {
            title: "Member",
            icon: FaUserGroup,
            href: "/dashboard/member",
        },
        {
            title: "Teacher",
            icon: FaUserGraduate,
            href: "/dashboard/teacher",
        },
        {
            title: "Student",
            icon: FaUsers,
            href: "/dashboard/students",
        },
        {
            title: "Employee",
            icon: FaUserGear,
            href: "/dashboard/employees",
        },
        {
            title: "Payment",
            icon: FaUserGraduate,
            href: "/dashboard/payment",
        },
    ]
    const singleMenuItems = [
        {
            title: "All Students",
            icon: LucideUserRoundCheck,
            href: "/dashboard/students",
        },
        {
            title: "Admission",
            icon: RiPresentationLine,
            href: "/dashboard/students/new",
        },
        {
            title: "Attendence",
            icon: RiPresentationLine,
            href: "/dashboard/students/attendence",
        },
        {
            title: "Result",
            icon: RiUserSearchLine,
            href: "/dashboard",
        },
        {
            title: "Admit Card",
            icon: BsCardChecklist,
            href: "/dashboard/admitcard",
        },
        {
            title: "Routine",
            icon: BsCardList,
            href: "/dashboard/routine",
        },
        {
            title: "Report",
            icon: TbReport,
            href: "/dashboard/report",
        },
        {
            title: "Invoice",
            icon: LiaFileInvoiceDollarSolid,
            href: "/dashboard/invoice",
        },
    ]

    const singleMenu = [
        { title: 'Member', icon: FaUserGroup, href: '/dashboard/member' },
        { title: 'Teacher', icon: FaUserGraduate, href: '/dashboard/teacher' },
        { title: 'Student', icon: FaUsers, href: '/dashboard/students' },
        { title: 'Employee', icon: FaUserGear, href: '/dashboard/employees' },
        { title: 'Parents', icon: FaUsers, href: '/dashboard/parents' },
        { title: 'Payment', icon: LuBadgeDollarSign, href: '/dashboard/payment' },
    ];

    const [openMenu, setOpenMenu] = useState(false);
    const [showIcon, setShowIcon] = useState(true);

    const handleToggleIcon = () => {
        setShowIcon(!showIcon);
    };
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return (

        <div className={showSidebar ? 'sm:block fixed top-0 left-0 z-50 text-slate-800 dark:text-slate-200 dark:bg-slate-900 space-y-6 w-64 h-full px-4 py-4 shadow-md transition-all duration-300 ease-in-out transform translate-x-0 overflow-y-scroll' : 'hidden sm:block fixed top-0 left-0 text-slate-800 dark:text-slate-200 dark:bg-slate-900 space-y-6 w-64 h-full py-4 shadow-md transition-all duration-300 ease-in-out transform translate-x-0 overflow-y-scroll'}>
            <Link href="#" className='mb-6'>Logo Here</Link>
            <div className="sm:block absolute top-2 right-3 z-50">
                <button onClick={handleToggleIcon} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    {showSidebar ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>
            <div className='flex flex-col space-y-1.5 mt-12 overflow-auto '>
                <Link
                    href="/dashboard"
                    onClick={() => setShowSidebar(false)}
                    className={
                        pathname === "/dashboard"
                            ? "flex items-center space-x-3 font-semibold border-l-2 border-green-500 text-green-500 py-2 px-4 hover:bg-slate-800 transition-colors duration-500"
                            : "flex items-center space-x-3 py-2 px-4 hover:bg-slate-800 transition-colors duration-300"
                    }>
                    <LuLayoutDashboard className='w-5 h-5' />
                    {showIcon && (
                        <span className=''>DashBoard</span>
                    )}
                </Link>




                <Collapsible className=''>
                    <CollapsibleTrigger
                        onClick={() => setOpenMenu(!openMenu)}
                        className="flex justify-between w-full items-center px-4"
                    >
                        <div className='flex items-center space-x-3 '>
                            <MdCastForEducation className='w-5 h-5' />
                            {showIcon && (
                                <span className=''> Student </span>
                            )}

                        </div>

                        {showIcon && (openMenu ? <ChevronDown /> : <ChevronRight />)}

                    </CollapsibleTrigger>

                    <CollapsibleContent className='ml-7 pl-5 rounded-md py-1.5 transition-transform bg-slate-800'>
                        {singleMenuItems.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <Link onClick={() => setShowSidebar(false)} key={i} href={item.href}
                                    className={
                                        pathname === item.href ? "flex items-center space-x-3 font-medium border-green-500 text-green-500" : "flex items-center space-x-3 py-1.5 text-sm"
                                    }
                                >
                                    <Icon className='w-5 h-5' />
                                    <span>{item.title}</span>
                                </Link>
                            );
                        })}
                    </CollapsibleContent>
                </Collapsible>


                {singleMenu.map((item, i) => {
                    const Icon = item.icon
                    return (
                        <Link onClick={() => setShowSidebar(false)} key={i} href={item.href}
                            className={
                                item.href == pathname ? "flex items-center space-x-3 font-semibold border-l-2 border-green-500 text-green-500 py-2 px-4 hover:bg-slate-800 transition-colors duration-500"
                                    : "flex items-center space-x-3 py-2 px-4 hover:bg-slate-800 transition-colors duration-300"
                            }>
                            <Icon className='w-5 h-5' />
                            {showIcon && (
                                <span className=''> {item.title} </span>
                            )}
                        </Link>
                    )
                })}

            </div>
            <div><Button className="bg-rose-500 w-full text-white"> Log Out </Button></div>
        </div>

    );
};

export default SideBar;