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
      completed: true,
    },
  ]);

  const [inputText, setInputText] = useState("");

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
    
    const newTodos: item = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodos]);
  };

  return (
    <div className="main flex flex-col items-center justify-center h-screen font-sfpro">
      <h1 className="text-4xl font-bold mb-8">Todo List</h1>
      <div className="bg-gray-500 bg-opacity-25 rounded-lg w-96 px-8 py-6">
        <ul>
          {todos.map((todo) => (
            <>
              <li
                className="flex items-center text-lg font-medium mb-4"
                key={todo.id}
                onClick={() => handleToggle(todo.id)}
              >
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <span className="text-white font-medium">{todo.text}</span>
              </li>
            </>
          ))}
        </ul>
        <div className="flex mt-8">
          <input
            className="border border-gray-600 bg-gray-500 bg-opacity-25 rounded-l-lg py-2 px-4 w-full font-medium focus:border-gray-500"
            type="text"
            placeholder="Add todo Item"
            onChange={(e) => setInputText(e.currentTarget.value)}
          />
          <button
            className="flex-none bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 rounded-r-lg"
            onClick={handleClick}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};
