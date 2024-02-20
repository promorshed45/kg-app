'use client';
import React, { useState } from 'react';
import avatar from '@/assets/ab-1-2.jpg'
import Image from 'next/image';
import { LuPencilRuler, LuPrinter, LuTrash2, LuView } from 'react-icons/lu';

const StudentsInformation = () => {
  const PAGE_SIZE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1)* PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentlyDisplayData = studentsInfo.slice(startIndex, endIndex);
  const totalPages = Math.ceil(studentsInfo.length/PAGE_SIZE);
  const itemStartIndex = startIndex + 1;
  const itemEndIndex = startIndex + PAGE_SIZE;
  const handleChangepage = (page) => {
    console.log(page);
  }
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-200 dark:bg-slate-900">
                <table className="w-full text-sm text-left font-sans text-gray-700 dark:text-gray-400">
                    <thead className="text-md text-green-500 font-sans bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {/* <th scope="col" className="p-4"> 
                              <div className="flex items-center">
                                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="checkbox-all-search" className="sr-only">checkbox</label>
                              </div>
                            </th> */}
                            <th scope="col" className="pl-6 py-3"> Student <br /> Id </th>
                            <th scope="col" className="mx-3 px-3 py-3"> Name of Student, <br /> Father, Mother </th>
                            <th scope="col" className=" py-3"> Mobile No.  </th>
                            <th scope="col" className="py-3"> Class/ <br /> Department </th>
                            <th scope="col" className="px-3 py-3"> Section </th>
                            <th scope="col" className="py-3"> Blood <br /> Group </th>
                            <th scope="col" className="pl-3 py-3"> Gendar </th>
                            <th scope="col" className="px-3 py-3"> ID Card </th>
                            <th scope="col" className="py-3"> Photo </th>
                            <th scope="col" className="pl-5 py-3">Action</th>

                        </tr>
                    </thead>

                    {currentlyDisplayData.map((item, i)=> (
                    <tbody key={i}>
                        <tr className="border-t-2  dark:bg-slate-900 border-gray-300 dark:border-gray-700 hover:bg-rose-50 hover:shadow-md dark:hover:bg-gray-600">
                            {/* <td className="w-4 pl-4 bg-rose-500">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td> */}
                            <td className="pl-6 py-4">   {item.id}  </td>
                            <th scope="row" className="flex items-center px-3 py-2 whitespace-nowrap  dark:text-white">
                                {/* <Image className="w-14 h-14 rounded-full" src={avatar} alt="Jese image" /> */}
                                <div className="">
                                    <div className="text-base font-medium"> {item.name} </div>
                                    <div className="font-normal dark:text-gray-400"> {item.fatherName} </div>
                                    <div className="font-normal dark:text-gray-400"> {item.motherName} </div>
                                </div>
                            </th>
                            <td className="pr-5 py-4">   {item.mobile}  </td>
                            <td className="pl-3 py-4">   {item.class}  </td>
                            <td className="px-3 py-4">   {item.section}  </td>
                            <td className="py-4">   {item.bloodGroup}  </td>
                            <td className="pl-3 py-4">   {item.gender}  </td>
                            <td className="px-3 py-4">    {item.idCard}  </td>
                            
                            <th scope="row" className=" items-center py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                <Image className="w-14 h-14 rounded-md" src={avatar} alt="Jese image" />
                            </th>
                            <td className="px-3">
                                <div className='flex gap-2'>
                                    <button className="font-medium text-gray-100  px-2 py-2 rounded-md bg-blue-600 hover:underline"> <LuPencilRuler /> </button>
                                    <button className="font-medium text-gray-100  px-2 py-2 rounded-md bg-rose-600 hover:underline">  <LuTrash2 /> </button>
                                    <button className="font-medium text-gray-100  px-2 py-2 rounded-md bg-green-600 hover:underline"> <LuView/> </button>  
                                    <button className="font-medium text-gray-100  px-2 py-2 rounded-md bg-fuchsia-500 hover:underline"> <LuPrinter/> </button>  
                                </div>                              
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div>
            <div className='flex justify-center'> 
            <div className="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
              
             
            </div>                   
            <div className="flex justify-center items-center space-x-1 dark:text-gray-100 pt-10">
            <span className="block pr-3"> Showing {itemStartIndex} - {itemEndIndex} of {studentsInfo.length}</span>
              <button onClick={()=>setCurrentPage(currentPage-1)}
                disabled={currentPage=== 1 }
              title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              

             
              {Array.from({length: totalPages}, (_, index)=>{
                return(
                  <button  
                  key={index} 
                  onClick={()=>setCurrentPage(index+1)}
                  className={currentPage == index + 1? "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold rounded shadow-md bg-green-500 dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400 "
                : "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
              }> {index + 1} </button>
                )
              })}
              
             
              <button onClick={()=>setCurrentPage(currentPage+1)} 
                disabled={currentPage==totalPages} 
              title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            </div>
            
        </>
    );
};

export default StudentsInformation;

const studentsInfo = [
    {
      "id": "001",
      "photo": "/studentsPhoto/001.jpg",
      "name": "John Doe",
      "fatherName": "Michael Doe",
      "motherName": "Alice Doe",
      "class": "10",
      "section": "A",
      "gender": "Male",
      "bloodGroup": "A+",
      "mobile": "1234567890",
      "idCard": "Delivered",
      "birthCertificate": "Available"
    },
    {
      "id": "002",
      "photo": "/studentsPhoto/002.jpg",
      "name": "Jane Smith",
      "fatherName": "David Smith",
      "motherName": "Emily Smith",
      "class": "9",
      "section": "B",
      "gender": "Female",
      "bloodGroup": "B-",
      "mobile": "9876543210",
      "idCard": "Pending",
      "birthCertificate": "Not available"
    },
    {
      "id": "003",
      "photo": "/studentsPhoto/003.jpg",
      "name": "Robert Johnson Farnandu  ",
      "fatherName": "James Johnson",
      "motherName": "Sarah Johnson",
      "class": "11",
      "section": "C",
      "gender": "Male",
      "bloodGroup": "O+",
      "mobile": "4561237890",
      "idCard": "Delivered",
      "birthCertificate": "Available"
    },
    {
      "id": "004",
      "photo": "/studentsPhoto/004.jpg",
      "name": "Emily Wilson",
      "fatherName": "Daniel Wilson",
      "motherName": "Olivia Wilson",
      "class": "8",
      "section": "A",
      "gender": "Female",
      "bloodGroup": "AB+",
      "mobile": "7891234560",
      "idCard": "Delivered",
      "birthCertificate": "Available"
    },
    {
      "id": "005",
      "photo": "/studentsPhoto/005.jpg",
      "name": "Michael Brown",
      "fatherName": "William Brown",
      "motherName": "Sophia Brown",
      "class": "12",
      "section": "D",
      "gender": "Male",
      "bloodGroup": "A-",
      "mobile": "3219876540",
      "idCard": "Pending",
      "birthCertificate": "Available"
    },
    {
      "id": "006",
      "photo": "/studentsPhoto/006.jpg",
      "name": "Md. Ashraful Islam Arafat",
      "fatherName": "Joseph Davis",
      "motherName": "Charlotte Davis",
      "class": "10",
      "section": "B",
      "gender": "Female",
      "bloodGroup": "B+",
      "mobile": "6543219870",
      "idCard": "Delivered",
      "birthCertificate": "Not available"
    },
    {
      "id": "007",
      "photo": "/studentsPhoto/007.jpg",
      "name": "David Martinez",
      "fatherName": "Anthony Martinez",
      "motherName": "Mia Martinez",
      "class": "9",
      "section": "C",
      "gender": "Male",
      "bloodGroup": "AB-",
      "mobile": "9876541230",
      "idCard": "Pending",
      "birthCertificate": "Available"
    },
    {
      "id": "008",
      "photo": "/studentsPhoto/008.jpg",
      "name": "Sophia Garcia",
      "fatherName": "Charles Garcia",
      "motherName": "Amelia Garcia",
      "class": "11",
      "section": "A",
      "gender": "Female",
      "bloodGroup": "O-",
      "mobile": "6549873210",
      "idCard": "Delivered",
      "birthCertificate": "Available"
    },
    {
      "id": "009",
      "photo": "/studentsPhoto/009.jpg",
      "name": "Daniel Rodriguez",
      "fatherName": "Matthew Rodriguez",
      "motherName": "Grace Rodriguez",
      "class": "8",
      "section": "B",
      "gender": "Male",
      "bloodGroup": "B-",
      "mobile": "1237896540",
      "idCard": "Delivered",
      "birthCertificate": "Not available"
    },
    {
      "id": "010",
      "photo": "/studentsPhoto/010.jpg",
      "name": "Mia Hernandez",
      "fatherName": "Ethan Hernandez",
      "motherName": "Ella Hernandez",
      "class": "12",
      "section": "C",
      "gender": "Female",
      "bloodGroup": "A+",
      "mobile": "9873216540",
      "idCard": "Pending",
      "birthCertificate": "Available"
    },
      {
        "id": "011",
        "photo": "/studentsPhoto/001.jpg",
        "name": "John Doe",
        "fatherName": "Michael Doe",
        "motherName": "Alice Doe",
        "class": "10",
        "section": "A",
        "gender": "Male",
        "bloodGroup": "A+",
        "mobile": "1234567890",
        "idCard": "Delivered",
        "birthCertificate": "Available"
      },
      {
        "id": "012",
        "photo": "/studentsPhoto/002.jpg",
        "name": "Jane Smith",
        "fatherName": "David Smith",
        "motherName": "Emily Smith",
        "class": "9",
        "section": "B",
        "gender": "Female",
        "bloodGroup": "B-",
        "mobile": "9876543210",
        "idCard": "Pending",
        "birthCertificate": "Not available"
      },
      {
        "id": "013",
        "photo": "/studentsPhoto/003.jpg",
        "name": "Robert Johnson",
        "fatherName": "James Johnson",
        "motherName": "Sarah Johnson",
        "class": "11",
        "section": "C",
        "gender": "Male",
        "bloodGroup": "O+",
        "mobile": "4561237890",
        "idCard": "Delivered",
        "birthCertificate": "Available"
      },
      {
        "id": "014",
        "photo": "/studentsPhoto/004.jpg",
        "name": "Emily Wilson",
        "fatherName": "Daniel Wilson",
        "motherName": "Olivia Wilson",
        "class": "8",
        "section": "A",
        "gender": "Female",
        "bloodGroup": "AB+",
        "mobile": "7891234560",
        "idCard": "Delivered",
        "birthCertificate": "Available"
      },
      {
        "id": "015",
        "photo": "/studentsPhoto/005.jpg",
        "name": "Michael Brown",
        "fatherName": "William Brown",
        "motherName": "Sophia Brown",
        "class": "12",
        "section": "D",
        "gender": "Male",
        "bloodGroup": "A-",
        "mobile": "3219876540",
        "idCard": "Pending",
        "birthCertificate": "Available"
      },
      {
        "id": "016",
        "photo": "/studentsPhoto/006.jpg",
        "name": "Olivia Davis",
        "fatherName": "Joseph Davis",
        "motherName": "Charlotte Davis",
        "class": "10",
        "section": "B",
        "gender": "Female",
        "bloodGroup": "B+",
        "mobile": "6543219870",
        "idCard": "Delivered",
        "birthCertificate": "Not available"
      },
      {
        "id": "017",
        "photo": "/studentsPhoto/007.jpg",
        "name": "David Martinez",
        "fatherName": "Anthony Martinez",
        "motherName": "Mia Martinez",
        "class": "9",
        "section": "C",
        "gender": "Male",
        "bloodGroup": "AB-",
        "mobile": "9876541230",
        "idCard": "Pending",
        "birthCertificate": "Available"
      },
      {
        "id": "018",
        "photo": "/studentsPhoto/008.jpg",
        "name": "Sophia Garcia",
        "fatherName": "Charles Garcia",
        "motherName": "Amelia Garcia",
        "class": "11",
        "section": "A",
        "gender": "Female",
        "bloodGroup": "O-",
        "mobile": "6549873210",
        "idCard": "Delivered",
        "birthCertificate": "Available"
      },
      {
        "id": "019",
        "photo": "/studentsPhoto/009.jpg",
        "name": "Daniel Rodriguez",
        "fatherName": "Matthew Rodriguez",
        "motherName": "Grace Rodriguez",
        "class": "8",
        "section": "B",
        "gender": "Male",
        "bloodGroup": "B-",
        "mobile": "1237896540",
        "idCard": "Delivered",
        "birthCertificate": "Not available"
      },
      {
        "id": "020",
        "photo": "/studentsPhoto/010.jpg",
        "name": "Mia Hernandez",
        "fatherName": "Ethan Hernandez",
        "motherName": "Ella Hernandez",
        "class": "12",
        "section": "C",
        "gender": "Female",
        "bloodGroup": "A+",
        "mobile": "9873216540",
        "idCard": "Pending",
        "birthCertificate": "Available"
      }
  ]
  