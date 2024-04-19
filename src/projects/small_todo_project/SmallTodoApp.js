
import React, { useState } from 'react';

const SmallTodoApp = () => {
  const [allTodoes, setAllTodoes] = useState([])
  const [todo, setTodo] = useState("")

  console.log(allTodoes)


  const addTodo = () => {
    if(todo==="")
    {
      return;
    }
    setAllTodoes([...allTodoes, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const tempAllTodoes = allTodoes.filter((item, i) => i != index);
    setAllTodoes(tempAllTodoes);
  };

  return (
    <div>
<div className="bg-gradient-to-r from-blue-500 to-transparent h-screen center pt-2 pr-2 pb-2 pl-2 flex-col ">
        <div className="flex gap-3">
          <input
            type="text "
            placeholder='Add Task ..................................................................📒'
            value={todo}
            className="w-96 px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) => setTodo(e.target.value)}
          />
          <div onClick={() => addTodo()}   className="bg-pink-500 hover:bg-pink-600 text-white font-bold center py-0  px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer min-w-40"
>
            Add Task
          </div>
        </div>
        <p>
         {allTodoes.map((item, index) => 
         <div className='flex justify-between item-center bg-blue-500 px-5 py-1 text-white font-bold border rounded-xl mt-2 w-96' >{item}<i className="fa-solid fa-trash-can cursor-pointer size-5 mt-2 text-red-400" onClick={() => deleteTodo(index)} ></i></div> 
         )}
        </p>
      </div>
    </div>
  );
};

export default SmallTodoApp;