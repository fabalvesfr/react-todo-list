import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (taskId) => {
    setTodoList(todoList.filter((task) => task.id !== taskId));
  };

  const completeTask = (event, id) => {
    setTodoList((todoList) => {
      return todoList.map((task) =>
        task.id === id ? { ...task, completed: event.target.checked } : task
      );
    });
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" placeholder="New task" onChange={handleChange} />
        <button onClick={addTask}>ADD NEW TASK</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
