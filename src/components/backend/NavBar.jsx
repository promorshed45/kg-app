import Image from 'next/image';
import { LuAlignJustify, LuBell, LuFileEdit, LuLayoutDashboard, LuLogOut, LuSun } from 'react-icons/lu';


import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import ThemeToggler from '../frontend/ui/ThemeToggler';
import User from './User';


const NavBar = ({setShowSidebar, showSidebar}) => {

    const icons = {
        "music": <LuLayoutDashboard />,
        "spots": <LuFileEdit />,
        "drawing": <LuLogOut />,

    };

    return (
        <div className='fixed top-0 left-0 md:left-64 right-0 z-50 flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50  h-14 md:h-16 px-3 md:px-5 py-4 md:pr-[16rem'>
            <button> <LuAlignJustify onClick={()=> setShowSidebar(!showSidebar)} className='md:hidden text-xl md:text-2xl dark:text-slate-100 text-slate-800' /> </button>
           
            <div className='flex items-center md:space-x-3 text-xl  md:text-2xl'>
                <ThemeToggler />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button type="button" className="relative inline-flex items-center mr-2 p-2 text-sm font-medium text-center text-white hover:bg-secondary rounded-full">
                            <LuBell className='text-xl md:text-2xl text-primary' />
                            <span className="sr-only">Notifications</span>
                            <div className="absolute inline-flex items-center justify-center p-1 text-xs text-white bg-red-500  rounded-full -top-1.5 -end-1.5 dark:border-gray-900">70</div>
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="mr-5 px-4 border-none text-gray-200 bg-slate-900">
                        <div id="toast-notification" className="w-full max-w-xs p-4 text-gray-300  dark:text-gray-300" role="alert">
                            <div className="flex items-center mb-3">
                                <span className="mb-1 text-sm font-semibold  dark:text-white">New notification</span>
                                <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center">
                                <div className="relative inline-block shrink-0">
                                    <Image width={200} height={200} className="w-12 h-12 border-2 border-rose-500 rounded-full dark:border-gray-800" src="/testimonals/1.jpg" alt="" />
                                    <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                                        <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                            <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                                            <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                                        </svg>
                                        <span className="sr-only">Message icon</span>
                                    </span>
                                </div>
                                <div className="ms-3 text-sm font-normal">
                                    <div className="text-sm font-semibold text-gray-400 dark:text-white">Bonnie Green</div>
                                    <div className="text-sm font-normal">commented on your photo</div>
                                    <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                                </div>
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>



                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button variant="ghost">
                            <Image width={200} height={200} className="w-10 h-10 border-2 mt-2 border-white rounded-full dark:border-gray-800" src="/testimonals/1.jpg" alt="" />
                        </button>
                    </DropdownMenuTrigger>


                    <DropdownMenuContent className="mr-5 px-4 border-none md:w-52 bg-slate-900 text-gray-200">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="hover:bg-gray-700  rounded-md dark:text-gray-50">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <LuLayoutDashboard className='mr-4 text-xl' /> <span className='text-base'> Dashboard </span>
                                </a>
                            </li>
                            <li className="hover:bg-gray-700  rounded-md dark:text-gray-50">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <LuFileEdit className='mr-4 text-xl' /> <span className='text-base'>  Eidt Profile </span>

                                </a>
                            </li>
                        </ul>
                        <ul className="pt-1 border-t border-gray-500 pb-2 space-y-1 text-sm">
                            <li className="hover:bg-gray-700  rounded-md dark:text-gray-50">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <LuLogOut className='mr-4 text-xl' /> <span className='text-base'>  Log out </span>
                                </a>
                            </li>
                        </ul>


                        {/* <div id="toast-notification" className="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
                            <div className="flex items-center mb-3">
                                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">New notification</span>
                                <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center">
                                <div className="relative inline-block shrink-0">
                                <Image width={200} height={200} className="w-12 h-12 border-2 border-rose-500 rounded-full dark:border-gray-800" src="/testimonals/1.jpg" alt="" />
                                    <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                                        <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                            <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                                            <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                                        </svg>
                                        <span className="sr-only">Message icon</span>
                                    </span>
                                </div>
                                <div className="ms-3 text-sm font-normal">
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
                                    <div className="text-sm font-normal">commented on your photo</div>
                                    <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                                </div>
                            </div>
                        </div> */}


                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default NavBar;

const menu = [
    {
        title: "Dashboard",
        icon: 'dashboard'
    },
    {
        title: "Edit Profile",
        icon: 'profile'
    },
    {
        title: "Log Out",
        icon: 'Logout'
    },
]

