import { X } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const FromHeader = ({title}) => {
    const router = useRouter();
    return (
        <div className='flex items-center justify-between py-4 px-12 bg-white text-slate-800 dark:text-slate-50 dark:bg-slate-800 rounded-lg shadow-md'>
            <h2> {title} </h2>
            <Button onClick={()=>router.back()} size="sm" variant="ghost">
                <X className="text-md"/>
            </Button>            
        </div>
    );
};

export default FromHeader;