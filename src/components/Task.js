import React, { useState } from "react";
import AddTask from "./AddTask";
import TasksContainer from "./TasksContainer";
import Nav from "./Nav";
import socketIO from "socket.io-client";
/*
👇🏻  Pass Socket.io into the required components
    where communications are made with the server
*/
const socket = socketIO.connect("http://localhost:4000");

const Task = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Nav />
      <AddTask socket={socket} setCount={setCount} />
      <TasksContainer socket={socket} count={count} />
    </div>
  );
};
export default Task;
