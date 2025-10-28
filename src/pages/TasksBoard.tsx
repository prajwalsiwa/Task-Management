import { useState } from "react";
import Header from "../components/Header";

function TasksBoard() {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div className="w-full">
      <Header onSearch={handleSearch} />
    </div>
  );
}

export default TasksBoard;
