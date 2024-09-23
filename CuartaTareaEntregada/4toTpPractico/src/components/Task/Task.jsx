const Task = ({ id, title, completed, onToggleComplete, onRemoveTask }) => {
    return (
      <li className={completed ? "completed" : ""}>
        <span onClick={() => onToggleComplete(id)}>{title}</span>
        <button onClick={() => onRemoveTask(id)} className="button-eliminar">Eliminar</button>
      </li>
    );
  };
  
  export default Task;
  