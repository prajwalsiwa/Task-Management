import { LuMoon, LuSun } from "react-icons/lu";

function ThemeToggle() {
  return (
    <div className=" bg-zinc-200 rounded-xl dark:bg-zinc-700">
      <button
        className={`p-4 hover:rounded-xl  hover:bg-zinc-300! border-none dark:hover:bg-zinc-500! dark:hover:text-zinc-700! `}
        onClick={() => {
          document.documentElement.classList.remove("dark");
        }}
      >
        <LuSun />
      </button>
      <button
        className="p-4 hover:rounded-xl  hover:bg-zinc-300!  dark:hover:bg-zinc-500! dark:hover:text-zinc-700! "
        onClick={() => {
          document.documentElement.classList.add("dark");
        }}
      >
        <LuMoon />
      </button>
    </div>
  );
}

export default ThemeToggle;
