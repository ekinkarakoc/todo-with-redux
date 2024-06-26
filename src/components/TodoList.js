import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { destroy, toggle } from "../redux/todos/todosSlice";

let filtered = [];

function TodoList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure ? ")) {
      dispatch(destroy(id));
    }
  };

  filtered = items;

  if (activeFilter !== "all") {
    filtered = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
  }

  return (
    <div>
      <ul className="todo-list">
        {filtered.map((item) => {
          return (
            <li key={item.id} className={item.completed ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => dispatch(toggle(item.id))}
                />
                <label>{item.title}</label>
                <button
                  className="destroy"
                  onClick={() => handleDestroy(item.id)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
