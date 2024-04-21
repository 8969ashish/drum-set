import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TodoNavbar from "./TodoNavbar";
import InProgress from "./InProgress";
import ScheduledTodoes from "./ScheduledTodoes";
import CompletedTodoes from "./CompletedTodoes";
import AllTodoes from "./AllTodoes";

const NewTodo = () => {
  const [allTodoes, setallTodoes] = useState([]);

  let incompleTodo = allTodoes.filter((item) => item.completed === false);

  let inProgress = incompleTodo?.filter((item) => item.InProgress === "yes");

  let SheduledTodo = allTodoes.filter((item) => item.date);

  let completedTodo = allTodoes.filter((item) => item.completed === true);

  const props = {
    allTodoes,
    setallTodoes,
    SheduledTodo,
    completedTodo,
    inProgress,
  };

  return (
    <div>
      <TodoNavbar props={props} />
      <Routes>
        <Route path="/" element={<AllTodoes props={props} />}></Route>
        <Route
          path="/inprogress"
          element={<InProgress props={props} />}
        ></Route>
        <Route
          path="/scheduled"
          element={<ScheduledTodoes props={props} />}
        ></Route>
        <Route
          path="/completed"
          element={<CompletedTodoes props={props} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default NewTodo;
