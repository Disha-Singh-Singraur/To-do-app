const TasksItem = (props) => {

    const handleCompleteClick = (e) => {
        props.onTaskComplete(props.task);
    }

    const handleDeleteClick = (e) => {
        props.onTaskDelete(props.task);
    }

  return (
    <div
      className="d-flex align-items-center justify-content-center gap-4 border-bottom ps-4 pe-4"
      style={{ height: "80px" }}
    >
      <span style={{ width: "800px", display: "inline-block" }} className="">
        {props.task}
      </span>
      <button className="btn btn-success" onClick={handleCompleteClick}>
        Completed
      </button>
      <button className="btn btn-danger" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );

}
export default TasksItem;