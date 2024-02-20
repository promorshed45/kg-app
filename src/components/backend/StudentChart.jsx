'use client';
import React, { useState } from 'react';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
  
 

const StudentChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
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
            text: 'Students Information Chats',
          },
        },
      };

      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

   
    const tabs = [
        {
            title: "New Students",
            type: "students",
            data: {
                labels,
                datasets: [
                  {
                    label: 'New Students',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                ],
              }
        },
        {
            title: "Fees Collection",
            type: "fees",
            data: {
                labels,
                datasets: [
                  {
                    label: 'Fees Collection',
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
            <h1 className='text-2xl mb-4 text-blue-500'> Students Information Chats </h1>
            <div className='p-4'>
                <div>
                    {/* <div className="sm:hidden">
                        <label htmlFor="Tab" className="sr-only">Tab</label>
                        <select id="Tab" className="w-full rounded-md border-gray-200">
                            <option>Settings</option>
                            <option>Messages</option>
                            <option>Archive</option>
                            <option select>Notifications</option>
                        </select>
                    </div> */}

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
                                return <Line key={i} options={options} data={tab.data} />;
                            }
                            return null;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default StudentChart;