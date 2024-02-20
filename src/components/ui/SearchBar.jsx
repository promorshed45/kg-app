import Link from 'next/link';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const SearchBar = ({type, name, placeholder, className}) => {
    return (
        <>
           <div className='items-center w-full lg:w-6/12 flex flex-col md:flex-row'>
                    <fieldset className="w-full mx-auto dark:text-gray-100 ">
                        <div className="relative w-full rounded-md py-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <IoIosSearch className="text-2xl text-rose-400" />
                                </button>
                            </span>
                            <input type={type} name={name} placeholder={placeholder} className={className} />
                        </div>
                    </fieldset>
                    <div className="w-full md:flex-1">
                        <Link href="/jobs"><button className="md:flex-1 h-10 rounded-r-sm btn md:px-5 bg-rose-500 text-white w-full">Search</button></Link>
                    </div>
                </div> 
        </>
    );
};

export default SearchBar;