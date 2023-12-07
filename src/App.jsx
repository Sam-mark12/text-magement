import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DateComponent from "./DateComponent";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [date, setDate] = useState(new Date());

  const handleButtonClick = () => {
    setTasks([...tasks, { task: currentTask, deadline: new Date(date), completed: false }]);
    setCurrentTask("");
  }

  const handleComplete = (index) => {
    setTasks(prevTasks => prevTasks.map((task, i) => i === index ? {...task, completed: true} : task));
  }

  return (
    <>
      <Navbar />
      <div className="bg-black w-full h-100">
        <main className="text-center">
          <div>
            <input
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
              placeholder="Add a new task"
              className="mt-32 p-6 w-[60%] border rounded-lg border-white border-dotted "
            /> 
            <DateComponent date={date} setDate={setDate} className="mt-4" />
            <button
              onClick={handleButtonClick}
              className="bg-white text-black p-3 rounded-md ml-6 mt-5"
            >
              ADD
            </button>
          </div>
          <ol className="space-y-3 max-w-lg mx-auto p-6">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`box-content h-20 p-4 border-4 text-white ${
                  task.completed
                    ? "bg-green-500" 
                    : new Date() > task.deadline
                    ? "bg-red-500" 
                    : "bg-gray-500" 
                } flex justify-start items-center shadow-white shadow-md hover:shadow-pink-500`}
              >
                {task.task} - Deadline: {task.deadline.toLocaleDateString()} 
                {!task.completed && <button onClick={() => handleComplete(index)} className="ml-4 bg-black text-white p-1 rounded-md flex justify-end items-end"> Completed</button>}
              </li>
            ))}
          </ol>
        </main>
      </div>
    </>
  );
}

export default App;



