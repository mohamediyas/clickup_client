import React, { useState } from "react";

const AddTask = ({ socket, setCount }) => {
  const [task, setTask] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    //👇🏻 Logs the task to the console
    socket.emit("createTask", { task });
    setTask("");
    setCount((prev) => prev + 1);
  };
  return (
    <form className="form__input" onSubmit={handleAddTodo}>
      <label htmlFor="task">Add Todo</label>
      <input
        type="text"
        name="task"
        id="task"
        value={task}
        className="input"
        required
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="addTodoBtn">ADD TODO</button>
    </form>
  );
};
export default AddTask;
