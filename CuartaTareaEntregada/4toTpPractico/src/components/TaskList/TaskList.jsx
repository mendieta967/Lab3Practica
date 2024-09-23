import Task from "../Task/Task";

const TasksList = ({ tasks, onToggleComplete, onRemoveTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onToggleComplete={onToggleComplete}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </ul>
  );
};

export default TasksList;
