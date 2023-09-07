import Tasklist from "./components/Tasklist";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main>
      <div className="mx-10 m-10">
        <TaskForm />
        <Tasklist />
      </div>
    </main>
  );
}
export default App;
