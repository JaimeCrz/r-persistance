import React, { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<item[]>([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 3,
      text: "Learn Node",
      completed: false,
    },
    {
      id: 4,
      text: "Learn Express",
      completed: false,
    },
  ]);

  const [inputText, setInputText] = useState("");]

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodos: item = {id: Date.now(), text: inputText, completed: false};
    setTodos([...todos, newTodos]);
  };

  return (
    <div className="main">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggle(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add todo Item" onChange={(e)=> setInputText(e.currentTarget.value)} />
      <button onClick={}>Add Item</button>
    </div>
  );
};
