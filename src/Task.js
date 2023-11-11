export const Task = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={(event) => props.completeTask(event, props.id)}
      />
      <span
        style={{ textDecoration: props.completed ? "line-through" : "none" }}
      >
        {props.taskName}
      </span>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </label>
  );
};
