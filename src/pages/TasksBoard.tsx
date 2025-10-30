import { useState } from "react";
import Header from "../components/Header";
import TasksList from "../components/TasksList";

function TasksBoard() {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div className="w-full gap-10 flex flex-col justify-center items-center">
      <Header onSearch={handleSearch} />
      <TasksList />
    </div>
  );
}

export default TasksBoard;
