import InputContainer from "./components/InputContainer";
import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import CompletedTask from "./components/CompletedTask.jsx";
import ThemeSwitch from "./components/ThemeSwitch.jsx";
import "./App.css";

function App() {

  const getInitialState = (key) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue) || [];
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setTasks([]);
    setCompletedTasks([]);
  }

  const [tasks, setTasks] = useState(getInitialState("tasks"));
  const [completedTasks, setCompletedTasks] = useState(getInitialState("completedTasks"));
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  const handleTaskAdd = (task) => {
    task  =task.trim();
    task= task.charAt(0).toUpperCase() + task.slice(1).toLowerCase();
    if (!task) return;

    if (tasks.includes(task)) {
      setShowDuplicateModal(true);
      return;
    }
    setTasks([...tasks, task]);
  }

  const handleTaskDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  }

  const handleTaskComplete = (taskToComplete) => {
    handleTaskDelete(taskToComplete);
    setCompletedTasks([...completedTasks, taskToComplete]);
  }

  const [theme, setTheme] = useState(() => { {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  }});

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme === "dark" ? "bg-dark text-white" : "bg-light text-dark";
  }, [theme]);

  return (
    <div>
      <ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
      <Heading />
      <InputContainer onTaskAdd={handleTaskAdd} />
      <h2 className="text-center my-4"> Tasks to be completed</h2>
      <TaskList
        tasks={tasks}
        onTaskDelete={handleTaskDelete}
        onTaskComplete={handleTaskComplete}
      />
      <CompletedTask completedTasks={completedTasks} tasks={tasks} />
      {tasks.length > 0 || completedTasks.length > 0 ? (
        <div className="text-center my-4">
          <button className="btn btn-danger" onClick={clearLocalStorage}>
            Clear All Tasks
          </button>
        </div>
      ) : null}
      <div
        className={`modal fade ${showDuplicateModal ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Duplicate Task</h5>
              <button
                className="btn-close"
                onClick={() => setShowDuplicateModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>This task already exists in your list.</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={() => setShowDuplicateModal(false)}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
