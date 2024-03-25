import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);

  return (
    <div>
      <ul className="todo-list">
        {items.map((item) => {
          return (
            <li key={item.id} className={item.completed ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => dispatch(toggle({ id: item.id }))}
                />
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
