import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  removeTodo,
  completeTodo,
  toggleEditMode,
  editTodoId,
  onChange,
  editTodo,
  updateTodo,
}) => {
  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          toggleEditMode={toggleEditMode}
          editTodoId={editTodoId}
          onChange={onChange}
          editTodo={editTodo}
          updateTodo={updateTodo}
        />
      );
    });
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
