import { useState, type FormEvent } from "react";
import { BiCircle } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { TiTick } from "react-icons/ti";

type toDoTask = {
  id: string;
  title: string;
  status: string;
};

const ToDoList = () => {
  const [tasks, setTasks] = useState<toDoTask[]>([
    { id: "1", title: "Task 1", status: "Done" },
    { id: "2", title: "Task 2", status: "Pending" },
    { id: "3", title: "Task 3", status: "Done" },
    { id: "4", title: "Task 4", status: "Pending" },
  ]);
  const [newTaskName, setNewTaskName] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (newTaskName !== "") {
      const newID = crypto.randomUUID();
      const newTask = {
        id: newID,
        title: newTaskName,
        status: "Pending",
      };
      setTasks([...tasks, newTask]);
      setNewTaskName("");
    }
  };
  const removeTask = (taskId: string) => {
    const filteredTasks = tasks.filter((task) => task.id != taskId);
    setTasks(filteredTasks);
  };
  const toggleStatus = (taskId: string) => {
    tasks.map((task) => {
      if (task.id == taskId) {
        if (task.status === "Done") {
          task.status = "Pending";
        } else {
          task.status = "Done";
        }
      }
      setTasks([...tasks]);
    });
  };

  return (
    <div className="flex justify-center p-20">
      <div className="py-10 px-20 bg-linear-to-tl from-cyan-500 to-blue-500 rounded-3xl w-2/3 min-h-80">
        <div className="text-center">
          <h1 className="text-white text-4xl">TASK</h1>
          <p className="">
            Tasks planned for:{" "}
            <span>
              <select name="" id="">
                <option value="monday">Monday</option>
                <option value="monday">Tuesday</option>
                <option value="monday">Wednesday</option>
                <option value="monday">Thursday</option>
                <option value="monday">Friday</option>
                <option value="monday">Saturday</option>
                <option value="monday">Sunday</option>
              </select>
            </span>
          </p>
        </div>
        <form className="py-3 text-white flex justify-between ">
          <input
            type="text"
            placeholder="Add task..."
            className="w-10/12 focus:outline-none border-b border-b-white"
            value={newTaskName}
            onChange={handleInput}
          />
          <button
            className="border border-gray-400 rounded p-2 bg-cyan-500 text-black"
            onClick={addTask}
          >
            Add
          </button>
        </form>
        {tasks.length <= 0 ? <p>There are no tasks in your list</p> : ""}
        <ul>
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="flex flex-wrap justify-between w-full bg-white rounded my-5 p-4"
              >
                <div className="flex">
                  <button
                    onClick={() => toggleStatus(task.id)}
                    className="rounded-full border border-gray-500 flex justify-center content-center p-1 mr-4"
                  >
                    {task.status == "Pending" ? (
                      <BiCircle className="text-cyan-500 text-2xl" />
                    ) : (
                      <TiTick className="text-cyan-500 text-2xl" />
                    )}
                  </button>
                  <p className={task.status == "Done" ? "line-through" : ""}>
                    {task.title}
                  </p>
                </div>
                <button
                  className="rounded-full border-gray-400 text-lg border p-2"
                  onClick={() => removeTask(task.id)}
                >
                  <CgClose className="text-gray-400" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ToDoList;
