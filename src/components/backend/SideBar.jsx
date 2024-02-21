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
    const studentSubMenu = [
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

    const [showIcon, setShowIcon] = useState(true);
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };
    const handleToggleIcon = () => {
        setShowIcon(!showIcon);
    };
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return (

        <div className={`bg-gray-800 text-white h-screen z-50 transition-all duration-300 ease-in-out ${collapsed ? 'w-20' : 'w-60'}`}>
            
            <div className="flex items-center justify-between p-4 bg-primary">
                {!collapsed && <span className="flex font-bold text-xl">Your Logo</span>}
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

           
            
            <div className='flex flex-col space-y-1.5 mt-12 overflow-auto '>
                {/* Navigation Links */}
                {/* Collapsible Menu */}
                <Collapsible>
                    <CollapsibleTrigger className="flex justify-between w-full items-center px-4">
                        <div className='flex items-center space-x-3'>
                            <MdCastForEducation className='w-5 h-5' />
                            {!collapsed && <span className=''> Student </span>}
                        </div>
                        <ChevronRight />
                    </CollapsibleTrigger>
                    <CollapsibleContent className='ml-7 pl-5 rounded-md py-1.5 transition-transform bg-slate-800'>
                        {studentSubMenu.map((item, i) => (
                            <Link key={i} href={item.href} className={pathname === item.href ? 'flex items-center space-x-3 font-medium border-green-500 text-green-500' : 'flex items-center space-x-3 py-1.5 text-sm'}>
                                <item.icon className={`w-5 h-5 hover:${item.title.hoverClass}`} />
                                <span>{item.title}</span>
                            </Link>
                        ))}
                    </CollapsibleContent>
                </Collapsible>

                {/* Single Menu Items */}
                {singleMenu.map((item, i) => (
                    <Link key={i} href={item.href} className={item.href === pathname ? 'flex items-center space-x-3 font-semibold border-l-2 border-green-500 text-green-500 py-2 px-4 hover:bg-slate-800 transition-colors duration-500' : 'flex items-center space-x-3 py-2 px-4 hover:bg-slate-800 transition-colors duration-300'}>
                        <item.icon className='w-5 h-5' />
                        {!collapsed && <span className=''>{item.title}</span>}
                    </Link>
                ))}
            </div>
            <div><Button className="bg-rose-500 w-full text-white"> Log Out </Button></div>
        </div>

    );
};

export default SideBar;