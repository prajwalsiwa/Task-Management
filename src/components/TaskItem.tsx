import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import type { task } from "../type";

interface TaskListProps {
  tasks: task;
}

function TaskItem({ tasks }: TaskListProps) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t   px-6 py-4 bg-zinc-100 ">
      <div>
        <span>{tasks.title}</span>
        <span>Task Description</span>
      </div>
      <div>{tasks.dueDate}</div>
      <div className="rounded-3xl bg-green-500 w-fit p-1 px-2 text-sm text-white">
        {tasks.status}
      </div>
      <div>
        <button>
          <BiEdit className="w-6 h-6 text-green-500" />
        </button>
        <button>
          <MdDeleteForever className="w-7 h-6 text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
