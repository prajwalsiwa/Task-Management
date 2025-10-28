import ThemeToggle from "./ThemeToggle";
import { BiPlus, BiSearch } from "react-icons/bi";
interface HeaderProps {
  onSearch: (value: string) => void;
}

function Header({ onSearch }: HeaderProps) {
  return (
    <div className="flex gap-2 items-center justify-end border px-6 py-2 w-full">
      <ThemeToggle />
      <div className="relative h-10!">
        <input
          type="text"
          className="h-full  rounded-md border dark:placeholder-zinc-300 placeholder-zinc-700  pl-9"
          placeholder="Search with title..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="absolute top-3 left-2 ">
          <BiSearch className="w-5 h-5" />
        </div>
      </div>
      <button
        type="button"
        className="w-30 px-2 text-white flex items-center justify-center gap-1 rounded-md bg-blue-500 hover:bg-blue-600 h-11 dark:bg-zinc-700 dark:hover:bg-zinc-500  "
      >
        <BiPlus className="w-6 h-6" />
        Add Task
      </button>
    </div>
  );
}

export default Header;
