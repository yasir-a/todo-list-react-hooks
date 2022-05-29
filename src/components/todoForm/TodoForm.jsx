const TodoForm = ({ id, type, btnText, value, onChange, onSubmit }) => {
  return (
    <form id={`${id}-form`} onSubmit={(e) => onSubmit(e)}>
      <input
        id={`${id}-input`}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <button id={`${id}-btn`} type='submit'>
        {btnText}
      </button>
    </form>
  );
};

export default TodoForm;
