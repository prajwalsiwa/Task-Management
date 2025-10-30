import { useEffect, useState } from "react";
import { fetchTasks } from "../api/TaskApi";
import type { task } from "../type";
import TaskItem from "./TaskItem";

function TasksList() {
  const [tasks, setTasks] = useState<task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasksData = await fetchTasks();
        setTasks(tasksData || []);
      } catch {
        console.log("error");
      }
    };

    loadTasks();
  }, []);

  console.log(tasks);

  return (
    <div className="border rounded-md content-container">
      <header className="grid grid-cols-[2fr_1fr_1fr_1fr]  px-6 py-4 bg-zinc-200 font-bold ">
        <div>Title</div>
        <div>Due Date</div>
        <div>Status</div>
        <div>Actions</div>
      </header>
      {tasks.map((task) => (
        <TaskItem tasks={task} />
      ))}
    </div>
  );
}

export default TasksList;
