import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";

const App = () => {
  console.log("App component rendered");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    console.log("useEffect-1 fired ");
    const todosJSON = localStorage.getItem("todos");
    const todosRetrieved = JSON.parse(todosJSON);
    console.log(todosJSON);
    if (todosRetrieved.length > 0) {
      setTodos(todosRetrieved);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect-2 fired ");
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem("todos", todosJSON);
    console.log(todosJSON);
  }, [todos]);

  const handleInputChange = (e) => {
    console.log(`change id ${e.target.id}`);
    console.log(`change value ${e.target.value}`);
    if (e.target.id === "todo-add-input") {
      setTodo(e.target.value);
    } else {
      setEditTodo(e.target.value);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(`submit id ${e.target.id}`);
    if (e.target.id === "todo-add-form") {
      const newTodo = {
        id: uuidv4(),
        todoText: todo,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    } else {
      const updatedTodos = [...todos].map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, todoText: editTodo };
        }
        return todo;
      });
      setTodos(updatedTodos);
      setEditTodoId(null);
      setEditTodo("");
    }
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleEditMode = (id) => {
    const todo = todos.find((todo) => {
      return todo.id === id;
    });
    setEditTodoId(id);
    setEditTodo(todo.todoText);
  };

  return (
    <div>
      <TodoForm
        id='todo-add'
        type='text'
        btnText='Add'
        value={todo}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        editTodoId={editTodoId}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        toggleEditMode={toggleEditMode}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
    </div>
  );
};

export default App;
