'use client';
import React from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { LuAccessibility } from 'react-icons/lu';

const SubmitButton = ({isLoading=false, buttonTitle, LoadingButtonTitle}) => {
    return (
        <div>
                {isLoading ? (
                    <Button 
                    type="button"
                    className="mt-4 to-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm py-5 mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 inline-flex items-center"
                    >
                        <LuAccessibility className='inline w-4 h-4 mr-3 text-white animate-spin' />
                    {/* {loadingButtonTitle}      */}
                    </Button> )
                    : 
                    ( <Button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-teal-600 rounded-lg focus:7ing-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800">
                    <Plus className='w-5 h-5 mr-2'/>
                    <span> {buttonTitle} </span>
                </Button>)
                }
                
        </div>
    );
};

export default SubmitButton;