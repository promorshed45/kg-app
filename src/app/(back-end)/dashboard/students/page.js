import Heading from '@/components/backend/Heading';
import StudentsInformation from '@/components/backend/StudentsInformation';
import SearchBar from '@/components/ui/SearchBar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <Heading title="Students Infomation"/>
           
            <div className='flex items-center justify-between gap-5 mt-4 py-6 px-8 bg-slate-300 dark:bg-slate-800 rounded-lg'>
                
                <SearchBar 
                type="Search"
                name="search"
                placeholder="Search of Name, Father, Mother, Roll"
                className="w-full h-10 pl-12 text-sm rounded-l-sm focus:outline-none dark:bg-gray-950 dark:text-gray-100 focus:dark:bg-gray-700 focus:dark:border-violet-400 px-3"
                />

                <div className='flex gap-5'>
                    <Button> Export </Button>
                    <Button> Delete </Button>
                    <Link href="/dashboard/students/new"> <Button> + Add Students </Button> </Link>
                </div>
            </div>
            <div className='pt-7'>
                <StudentsInformation />
            </div>
        </div>
    );
};

export default page;