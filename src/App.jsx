import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  const formAddChange = (e) => {
    setTodo(e.target.value);
  };
  const formEditChange = (e) => {
    setEditTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    console.log(`submit id ${e.target.id}`);
    const newTodo = {
      id: uuidv4(),
      todoText: todo,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
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

  const updateTodo = (e) => {
    e.preventDefault();
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === editTodoId) {
        return { ...todo, todoText: editTodo };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditTodoId(null);
    setEditTodo("");
  };

  return (
    <div>
      <TodoForm
        id='todo-add'
        type='text'
        btnText='Add'
        value={todo}
        onChange={formAddChange}
        onSubmit={addTodo}
      />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        toggleEditMode={toggleEditMode}
        editTodoId={editTodoId}
        onChange={formEditChange}
        editTodo={editTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
