import React from 'react';
import { Link } from 'react-router-dom';

const TodoNavbar = () => {
  return (
    <div>
      <div className="text-5xl mt-5 text-blue-700 ">Todo Application</div>

<div className="mt-3 w-[80%]  m-auto  ">

  <div className=" text-[20px] font-semibold flex py-2 px-auto items-center shadow-xl rounded-full justify-around border-2 border-gray-300">
  
  <Link to=''>
   <div className="flex border-2 border-red-300 items-center justify-center bg-red-200 py-2 px-10 rounded-full cursor-pointer min-w-[250px] text-center">
   <div className="">All Todoes</div>
   <div className="bg-red-500 text-white h-8 w-8 rounded-full ml-3 ">5</div>
   </div>
   </Link>
   <Link to='inprogress'>
   <div className="flex items-center justify-center bg-blue-200 py-2 px-10 rounded-full cursor-pointer min-w-[250px]">
   <div className="">In Progress</div>
   <div className="bg-blue-500 text-white h-8 w-8 rounded-full ml-3 ">1</div>
   </div></Link>
   <Link to='scheduled'>
   <div className="flex items-center justify-center bg-blue-200 py-2 px-10 rounded-full cursor-pointer min-w-[250px]">
   <div className="">Scheduled </div>
   <div className="bg-blue-500 text-white h-8 w-8 rounded-full ml-3 ">4</div>
   </div>
   </Link>
   <Link to='completed'>
   <div className="flex items-center bg-blue-200 py-2 px-10  rounded-full cursor-pointer min-w-[250px] text-center">
   <div className="">Completed </div>
   <div className="bg-blue-500 text-white h-8 w-8 rounded-full ml-3 ">3</div>
   </div>
   </Link>
  </div>

 

</div>
    </div>
  )
}

export default TodoNavbar
