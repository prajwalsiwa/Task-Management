import type { task } from "../type";

const TASK_STORAGE_KEY = "tasks_key";
const FETCH_DELAY_MS = 300;

const tasks: task[] = [
  {
    id: "1",
    title: "Build Landing Page",
    dueDate: "2025-11-01",
    status: "In Progress",
  },
  {
    id: "2",
    title: "Write Blog Post",
    dueDate: "2025-11-03",
    status: "Pending",
  },
  {
    id: "3",
    title: "Fix Login Bug",
    dueDate: "2025-11-05",
    status: "Completed",
  },
  {
    id: "4",
    title: "Update User Profile UI",
    dueDate: "2025-11-06",
    status: "In Progress",
  },
  {
    id: "5",
    title: "Deploy App to Server",
    dueDate: "2025-11-10",
    status: "Pending",
  },
];

const getStoredTasks = (): task[] => {
  const storedTasks = localStorage.getItem(TASK_STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : tasks;
};

export const fetchTasks = (): Promise<task[]> => {
  return new Promise((resolve, reject) => {
    try {
      const tasks = getStoredTasks();
      setTimeout(() => resolve(tasks), FETCH_DELAY_MS);
    } catch {
      reject("Failed to fetch tasks");
    }
  });
};
