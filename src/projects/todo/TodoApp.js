import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoNavbar from "./TodoNavbar";
import AllTodoes from "./AllTodoes";
import InProgress from "./InProgress";
import ScheduledTodoes from "./ScheduledTodoes";
import CompletedTodoes from "./CompletedTodoes";

const TodoApp = () => {
  return (
    <div>
      <TodoNavbar/>
      <Routes>
        <Route path='/' element={<AllTodoes/>}></Route>
        <Route path='/inprogress' element={<InProgress/>}></Route>
        <Route path='/scheduled' element={<ScheduledTodoes/>}></Route>
        <Route path='/completed' element={<CompletedTodoes/>}></Route>
      </Routes>
      {/* <div className="mt-5 bg-green-400 h-full rounded-[40px]">All items ....</div> */}
    </div>
  );
};

export default TodoApp;
