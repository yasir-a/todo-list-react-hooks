import TodoForm from "../todoForm/TodoForm";

const Todo = ({
  todo,
  editTodo,
  editTodoId,
  removeTodo,
  completeTodo,
  toggleEditMode,
  onChange,
  onSubmit,
}) => {
  return (
    <div>
      <input
        type='checkbox'
        checked={todo.isCompleted}
        onChange={() => completeTodo(todo.id)}
      />
      {editTodoId === todo.id ? (
        <div>
          <TodoForm
            id='todo-edit'
            type='text'
            btnText='Update'
            value={editTodo}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
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
