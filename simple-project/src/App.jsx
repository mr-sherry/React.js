import { useState, useEffect, useCallback } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState("all");
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    const completedCount = tasks.filter((task) => task.completed).length;
    setTaskCount({
      total: tasks.length,
      completed: completedCount,
      active: tasks.length - completedCount,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(() => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        text: newTaskText,
        completed: false,
      },
    ]);
    setNewTaskText("");
  }, [newTaskText]);

  const toggleTask = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div>
      <h1>Task Manager</h1>

      <div>
        <input
          type="text"
          placeholder="Add Task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      {
        <div>
          {taskCount.completed} completed / {taskCount.active} active /
          {taskCount.total} total
        </div>
      }

      <ul>
        {filteredTasks.length === 0 ? (
          <li>Add Tasks To Display</li>
        ) : (
          filteredTasks.map((task) => (
            <li key={task.id}>
              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span
                  style={
                    task.completed
                      ? { textDecoration: "line-through", color: "red" }
                      : {}
                  }
                >
                  {task.text}
                </span>
              </div>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
