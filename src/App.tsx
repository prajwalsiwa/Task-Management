import "./App.css";
import TasksBoard from "./pages/TasksBoard";

function App() {
  return (
    <div className="container flex flex-col items-center justify-center gap-6">
      <TasksBoard />
    </div>
  );
}

export default App;
