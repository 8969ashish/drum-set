import React from "react";
import img from "./growth.png"

const InProgress = ({ props }) => {
  const { inProgress } = props;

  console.log(inProgress);
  

  return (
    <div>
      <div className=" py-10 ">
        <div className="w-[60%] bg-yellow-50 rounded-xl p-4 min-h-screen m-auto">
          {inProgress?.map((item, index) => {
            return (
              <>
                <div className="flex mt-2" key={index}>
                  <div className="w-[60vw] relative flex items-center gap-3 first-letter: text-start bg-white rounded-lg px-4 py-3">
                    <div
                      className={` size-4 rounded-full  ${
                        (item.priority === "low" && "bg-green-600") ||
                        (item.priority === "medium" && "bg-yellow-200") ||
                        (item.priority === "high" && "bg-red-500")
                      } `}
                    ></div>
                    {item.title}

                    {item.InProgress === "yes" && (
                      <img
                        src={img}
                        alt=""
                        className="h-7 absolute right-2 bg-s\late-200 p-1"
                      />
                    )}

                    <span className=" absolute right-2 -bottom-0 text-[10px] font-ligh rounded-md ">
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
    </div>
  );
};

export default InProgress;
