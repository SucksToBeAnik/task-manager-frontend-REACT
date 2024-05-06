import { useEffect, useState } from "react";
import zustandStore from "../store/store";

const Sidebar = () => {
  const tasks = zustandStore((state) => state.tasks);

  const [task_status, setTaskStatus] = useState({
    completed_tasks: 0,
    ongoing_tasks: 0,
    remaining_tasks: 0,
  });

  useEffect(() => {
    setTaskStatus({
      completed_tasks: 0,
      ongoing_tasks: 0,
      remaining_tasks: 0,
    });
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.status === "Completed") {
        setTaskStatus((prev) => {
          return { ...prev, completed_tasks: prev.completed_tasks + 1 };
        });
      } else if (task.status === "Ongoing") {
        setTaskStatus((prev) => {
          return { ...prev, ongoing_tasks: prev.ongoing_tasks + 1 };
        });
      } else if (task.status === "Will Do") {
        setTaskStatus((prev) => {
          return { ...prev, remaining_tasks: prev.remaining_tasks + 1 };
        });
      }
    }
  }, [tasks]);

  return (
    <div className="bg-slate-200 rounded-xl p-6 flex flex-col gap-4 w:full md:w-2/5">
      <section className="bg-purple-700 rounded-md text-white p-4 shadow-md">
        <h1 className="font-bold text-center text-3xl p-2">Summary</h1>
        <ul className="flex flex-col justify-start w-full items-center gap-4 p-4 rounded-full bg-white text-black shadow">
          <li>
            Total tasks{" "}
            <span className="bg-green-500 rounded text-xs px-1 text-white py-[2px]">
              {tasks.length}
            </span>
          </li>
          <li>
            {" "}
            Tasks completed{" "}
            <span className="bg-green-500 rounded text-xs px-1 text-white py-[2px]">
              {task_status.completed_tasks}
            </span>
          </li>
          <li>
            Tasks ongoing{" "}
            <span className="bg-green-500 rounded text-xs px-1 text-white py-[2px]">
              {task_status.ongoing_tasks}
            </span>
          </li>
          <li>
            Tasks remaining{" "}
            <span className="bg-green-500 rounded text-xs px-1 text-white py-[2px]">
              {task_status.remaining_tasks}
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h1 className="my-4 font-semibold text-4xl">Todays Quote</h1>
        <p className="bg-blue-600 rounded text-white shadow p-4 text-md first-letter:text-xl">
          What goes around, comes around
        </p>
      </section>
    </div>
  );
};

export default Sidebar;
