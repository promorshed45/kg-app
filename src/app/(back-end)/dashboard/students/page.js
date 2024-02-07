import Heading from '@/components/backend/Heading';
import StudentsInformation from '@/components/backend/StudentsInformation';
import React from 'react';

const page = () => {
    return (
        <div>
            <Heading title="Students Infomation"/>
            <div className='pt-7'>
            <StudentsInformation/>
            </div>
        </div>
    );
};

export default page;