import React, { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { task: inputValue.trim(), completed: false }]);
      setInputValue("");
    }
  };
 
  const handleCheckboxChange = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      const updatedTodo = { ...updatedTodos[index] };
      updatedTodo.completed = !updatedTodo.completed;
      updatedTodos[index] = updatedTodo;
      return updatedTodos;
    });
  };
   

  const handleRemove = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div class="container">
    <h1>Todo App</h1>
    <form>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        id="task-input"
        placeholder="Enter a task"
      />
      <button onClick={handleSubmit}>Add</button>
    </form>

    <ul id="todo-list">
      {todos.map((obj, index) => {
        return (
          <li key={index}>
            <div class="tick-box" onClick={() => handleCheckboxChange(index)}>
              <i class={`tick-icon fas ${obj.completed ? 'fa-check' : 'fa-plus'}`}></i>
            </div>
            <label>
              <span className={obj.completed ? 'completed' : ''}>{obj.task}</span>
              <button class="remove-icon" onClick={() => handleRemove(index)}>
                <i class="fas fa-trash-alt"></i>
              </button>
            </label>
          </li>
        );
      })}
    </ul>
  </div>

  );
}

export default TodoApp;
