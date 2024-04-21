import React, { useEffect, useState } from "react";
import img from "./growth.png";

const AllTodoes = ({ props }) => {
  const [InputValue, setInputValue] = useState("");
  const [Priority, setPriority] = useState("medium");
  const [Progress, setProgress] = useState("no");
  const [Date, setDate] = useState("");

  const { allTodoes, setallTodoes } = props;

  const current = allTodoes.filter((item) => item.completed === false);

  const addTodo = () => {
    const Todo_Object = {
      title: InputValue,
      priority: Priority,
      InProgress: Progress,
      completed: false,
      date: Date,
    };

    setallTodoes([Todo_Object, ...allTodoes]);
    setInputValue(" ");
  };

  const deleteTodo = (index) => {
    const selectedTodo = allTodoes[index];
    const updatedTodo = {
      ...selectedTodo,
      completed: true,
      date: "",
      InProgress: "no",
    };

    const tempTodo = [...allTodoes];
    tempTodo.splice(index, 1);
    console.log("EGrgrggdrgrdgd", [...tempTodo, updatedTodo]);
    setallTodoes([...tempTodo, updatedTodo]);
  };

  return (
    <div className="bg-blue-300 h-[450px] w-fit m-auto rounded-3xl mt-5">
      <div className="flex  p-5 gap-10 items-center">
        <div className=" flex flex-col items-start">
          <div className="">Todo</div>
          <input
            type="text"
            className="w-60 p-2"
            value={InputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className=" flex flex-col items-start ">
          <div className="">Shedule</div>
          <input
            type="date"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            className="w-60 p-2"
          />
        </div>

        <div className=" flex flex-col items-start">
          <div className="">Priority</div>
          <select
            type="text"
            value={Priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-60 p-3 rounded-md"
          >
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className=" flex flex-col items-start">
          <div className="">In Progress</div>
          <select
            type="text"
            value={Progress}
            onChange={(e) => setProgress(e.target.value)}
            className="w-60 p-3 rounded-md"
          >
            <option value="no">no</option>
            <option value="yes">yes</option>
          </select>
        </div>

        <div
          className="bg-blue-700 mt-5 text-white py-2 px-7 cursor-pointer hover:bg-blue-900 text-xl rounded-lg"
          onClick={() => addTodo()}
        >
          Add Todo
        </div>
      </div>
      <div className="w-[80%] m-auto">
        {current?.map((item, index) => {
          return (
            <>
              <div className="flex mt-2" key={index}>
                <div className="w-[60vw] relative flex items-center gap-3 first-letter: text-start bg-white rounded-lg px-4 py-3">
                  <div
                    className={` size-4 rounded-full  ${
                      (item?.priority === "low" && "bg-green-600") ||
                      (item?.priority === "medium" && "bg-yellow-200") ||
                      (item?.priority === "high" && "bg-red-500")
                    } `}
                  ></div>
                  <div className={`${item.completed ? "line-through" : ""}`}>
                    {item?.title}
                  </div>

                  {item.InProgress === "yes" && (
                    <img
                      src={img}
                      alt=""
                      className="h-7 absolute right-2 bg-s\late-200 p-1"
                    />
                  )}

                  <span className=" absolute right-2 tracking-wider -bottom-0 text-[9px] font-ligh rounded-md ">
                    {item?.date}
                  </span>
                </div>

                <div
                  className="bg-rd-500 bg-red-200 px-3 py-2 ml-2 cursor-pointer rounded-lg"
                  onClick={() => deleteTodo(index)}
                >
                  <i class="fa-solid text-red-500 text-2xl fa-circle-xmark"></i>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AllTodoes;
