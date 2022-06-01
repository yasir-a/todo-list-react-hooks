import TodoForm from "../todoForm/TodoForm";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import "./todo.css";

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
    <div className='todo-container'>
      <input
        className='todo-checkbox'
        type='checkbox'
        checked={todo.isCompleted}
        onChange={() => completeTodo(todo.id)}
      />
      {editTodoId === todo.id ? (
        <TodoForm
          id='todo-edit'
          type='text'
          btnText='Update'
          value={editTodo}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      ) : (
        <div className='todo-text-btn'>
          <p className={`todo-text ${todo.isCompleted ? "completed" : ""}`}>
            {todo.todoText}
          </p>
          <div className='todo-btn'>
            <button className='btn-group' onClick={() => removeTodo(todo.id)}>
              <RiDeleteBin6Line className='icon' />
            </button>
            <button
              className='btn-group'
              onClick={() => toggleEditMode(todo.id)}
            >
              <RiEditBoxLine className='icon' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
