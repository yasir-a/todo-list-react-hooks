import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  editTodo,
  editTodoId,
  removeTodo,
  completeTodo,
  toggleEditMode,
  onChange,
  onSubmit,
}) => {
  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          editTodoId={editTodoId}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          toggleEditMode={toggleEditMode}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      );
    });
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
