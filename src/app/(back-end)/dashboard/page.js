import Heading from '@/components/backend/Heading';
import StateOne from '@/components/backend/StateOne';
import React from 'react';
import StudentChart from '@/components/backend/StudentChart';
import FinancialCart from '@/components/backend/FinancialCart';

const page = () => {
    return (
        <div>
           <Heading title="Dashboard Overview"/>
                <StateOne/>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full py-5'> 
                    <FinancialCart/>
                    <StudentChart/>
                </div>
           {/* Charts */}
           {/* Recent Orders Table */}
        </div>
    );
};

export default page;