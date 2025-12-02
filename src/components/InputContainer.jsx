const InputContainer = (props) => {
    
    const handlesubmit = (e) => {
        e.preventDefault();
        const task=e.target.task.value;
        if(task){
            console.log("Task Submitted:", task);
            props.onTaskAdd(task);
            e.target.reset();
        }
    }

    return <div className="p-4">
      <form method="post" className="d-flex flex-row justify-content-center gap-3 my-4 inputForm" onSubmit={handlesubmit}>
      <input type="text" name="task" placeholder="Enter a task" style={{maxWidth: "800px", height: "50px"}} className="form-control inputField"/>
      <button className="btn btn-primary submitButton" style={{height: "50px", minWidth: "100px"}} type="submit">{screen.width <= 600 ? "Add" : "Add Task"}</button>
      </form>
    </div>

}
export default InputContainer;