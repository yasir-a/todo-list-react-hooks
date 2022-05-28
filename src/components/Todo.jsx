import React from "react";
import TodoForm from "./todoForm";

const Todo = ({
  todo,
  removeTodo,
  completeTodo,
  toggleEditMode,
  editTodoId,
  onChange,
  editTodo,
  updateTodo,
}) => {
  return (
    <div>
      <input
        type='checkbox'
        checked={todo.isCompleted}
        onChange={() => completeTodo(todo.id)}
      />
      {editTodoId === todo.id ? (
        <form id='todo-edit-form' onSubmit={updateTodo}>
          <input
            id='todo-edit-input'
            type='text'
            value={editTodo}
            onChange={(e) => onChange(e)}
          />
          <button id='todo-edit-btn' type='submit'>
            Update
          </button>
        </form>
      ) : (
        <div>
          <p>{todo.todoText}</p>
          <button onClick={() => removeTodo(todo.id)}>remove</button>
          <button onClick={() => toggleEditMode(todo.id)}>edit</button>
        </div>
      )}
    </div>
  );
};

export default Todo;
