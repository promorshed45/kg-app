'use client';
import React, { useState } from 'react';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {fa, faker} from '@faker-js/faker';
  
 

const FinancialCart = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },
        },
      };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

   
    const tabs = [
        {
            title: "Income",
            type: "income",
            data: {
                labels,
                datasets: [
                  {
                    label: 'Income',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    borderColor: 'rgb(193, 242, 176)',
                    backgroundColor: 'rgba(199, 162, 235, 0.5)',
                  },
                ],
              }
        },
        {
            title: "Expense",
            type: "expense",
            data: {
                labels,
                datasets: [
                  {
                    label: 'Expense',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  },
                ],
              }
        }
    ]
    const [chartDataDisplay, setChartDataDisplay] = useState(tabs[0].type);
 
    return (
        <div className='bg-white dark:bg-slate-900 p-8 rounded-lg my-5 w-full'>
            <h1 className='text-2xl mb-4 text-green-500'> Income/Expense Report </h1>
            <div className='p-4'>
                <div>
                
                <div className="hidden sm:block">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex gap-6" aria-label="Tabs">

                                {
                                tabs.map((tab, i)=>(
                                <button key={i} onClick={() => setChartDataDisplay(tab.type)}  href="#" className={chartDataDisplay==tab.type? "shrink-0 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-secondary border-secondary" : "shrink-0 border-b-2 border-transparent px-1 pb-4 text-md font-medium text-gray-200 hover:border-secondary hover:text-secondary"}>
                                    {tab.title}
                                </button>
                                    )
                                )}
                           </nav>
                        </div>
                    </div>
                    {
                        tabs.map((tab,i)=>{
                            if(chartDataDisplay===tab.type){
                                return <Bar key={i} options={options} data={tab.data} />;
                            }
                            return null;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FinancialCart;