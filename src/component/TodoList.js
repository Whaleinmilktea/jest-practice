import { useEffect, useState } from "react";

const TodoList = () => {
  const [TodoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodoList(json))
      .catch(() => {
        setErrorMsg("에러 발생");
      });
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      {errorMsg ? (
        <p>{errorMsg}</p>
      ) : (
        <ul>
          {TodoList.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : undefined,
              }}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
