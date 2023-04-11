import React, { useState } from "react";

export const TodoList = () => {
    return (
        <div className="main">
            <h1>Todo List</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <input type="text" placeholder="Add todo Item"/>
            <button>Add Item</button>
        </div>
    )
}