const CompletedTask = (props) => {
    return (
      <div className="p-4">
        {props.completedTasks.length !== 0 && (
          <h5 className="text-center my-4">Completed Tasks!</h5>
        )}
        {props.completedTasks.length === 0 && props.tasks.length !== 0 && (
          <h5 className="text-center my-4">No Tasks Completed Yet!</h5>
        )}
        {props.completedTasks.length !== 0 && (
          <div
            style={{ maxWidth: "900px" }}
            className="center border rounded p-4 mx-auto"
          >
            {props.completedTasks.map((task) => (
              <div
                key={task}
                className="d-flex align-items-center gap-4 my-4"
              >
                <span
                  style={{ width: "100%",
                    display: "block",
                  }}
                  className="d-flex align-items-center gap-4 border-bottom ps-4 pe-4"
                >
                  {task}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default CompletedTask;