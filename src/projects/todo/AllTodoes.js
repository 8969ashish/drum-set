import React, { useState } from 'react'
import { Dropdown } from "flowbite-react";
const AllTodoes = () => {

const [todo, setTodo]=useState("");
const [allTodoes, setAllTodoes]=useState([])


// allTodoes=["how are you", "how are you", "how are you", "how"]

const addTodo=()=>
{
console.log("kkkkkkkkkk")
  setAllTodoes([todo,...allTodoes]);
  setTodo(" ");
}



  return (
    <div className='bg-blue-300 h-[450px] w-4/5 m-auto rounded-3xl mt-5'>
     
      <div className="flex p-5 gap-10 items-center">


       <div className=" flex flex-col items-start">
        <div className="">Todo</div>
        <input type="text" className='w-60 p-2' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
       </div>




       <div className=" flex flex-col items-start ">
        <div className="">Shedule</div>
        <input type="date" className='w-60 p-2'/>
       </div>

       <div className=" flex flex-col items-start">
        <div className="">Preority</div>
        <select type="text" className='w-60 p-3 rounded-md'>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>         
        </select>
       </div>
  

       <div className="bg-blue-700 text-white py-2 px-7 cursor-pointer hover:bg-blue-900 text-xl rounded-lg"
       onClick={()=>addTodo()}
       >Add Todo</div>

</div> 
       {
       allTodoes?.map((item)=>
       {
        return (
        <div key={item}>
        {item}
        </div>
        )
       })      
      }
    </div>
  )
}

export default AllTodoes
