import Todo from "../todo/Todo";
import "./todoList.css";

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
    if (todos.length > 0) {
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
    }
    return <p>There are no Todos</p>;
  };

  return <div className='todoList-container'>{renderTodos()}</div>;
};

export default TodoList;
