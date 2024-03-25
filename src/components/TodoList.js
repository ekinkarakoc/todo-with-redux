import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const items = useSelector((state) => state.todos.items);
  console.log(items);
  return (
    <div>
      <ul className="todo-list">
        {items.map((item) => {
          return (
            <li key={item.id} className={item.completed ? "completed" : ""}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{item.title}</label>
                <button className="destroy"></button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
