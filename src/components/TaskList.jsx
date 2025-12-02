import TasksItem from "./TasksItem.jsx";

const TaskList = (props) => {
  return (
    <div className="p-4">
      <div
        style={{ maxWidth: "900px"}}
        className="center border rounded mx-auto"
      >
        {props.tasks.length === 0 && (
          <h6 className="my-4 text-secondary ps-4">No Pending Tasks! </h6>
        )}
        {props.tasks.map((task) => (
          <TasksItem
            key={task}
            task={task}
            onTaskDelete={props.onTaskDelete}
            onTaskComplete={props.onTaskComplete}
          />
        ))}
      </div>
    </div>
  );
};
export default TaskList;
