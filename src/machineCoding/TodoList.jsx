import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  console.log("todo list", todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (filter === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
    } else if (filter === "active") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted !== true));
    } else {
      setFilteredTodos(todos);
    }
  }, [todos, filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTodo = formData.get("newtodo");
    if (newTodo.trim() !== "") {
      const newIndex = {
        id: Date.now(),
        name: newTodo,
        isCompleted: false,
      };
      setTodos((prev) => [...prev, newIndex]);
      e.target.reset();
    }
  };

  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((data) => {
        if (data.id !== id) {
          return data;
        } else {
          return {
            ...data,
            isCompleted: true,
          };
        }
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleOnsubmit}>
        <input type="text" name="newtodo" />
        <button type="submit">Add new todo</button>
      </form>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <h2>Todo List</h2>
        <select
          name=""
          id=""
          value={filter}
          onChange={(e) => handleFilterChange(e)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <ul>
        {filteredTodos.length > 0 &&
          filteredTodos?.map((todo) => (
            <li key={todo.id} style={{ display: "flex", alignItems: "center" }}>
              <p>{todo.name}</p>
              <span>
                {todo.isCompleted ? (
                  "✅"
                ) : (
                  <button onClick={() => handleComplete(todo.id)}>
                    mark complete
                  </button>
                )}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
