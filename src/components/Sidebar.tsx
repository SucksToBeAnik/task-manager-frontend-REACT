import { useEffect, useState } from "react";
import zustandStore from "../store/store";

const Sidebar = () => {
  const tasks = zustandStore((state) => state.tasks);

  const [task_status, setTaskStatus] = useState({
    completed_tasks: 0,
    ongoing_tasks: 0,
    remaining_tasks: 0
  })

  useEffect(() => {
    setTaskStatus({
      completed_tasks: 0,
      ongoing_tasks: 0,
      remaining_tasks: 0
    })
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.status === "Completed") {
        setTaskStatus((prev)=>{
          return {...prev, completed_tasks: prev.completed_tasks + 1}
        })
      } else if (task.status === "Ongoing") {
        setTaskStatus((prev)=>{
          return {...prev, ongoing_tasks: prev.ongoing_tasks + 1}
        })
      } else if (task.status === "Will Do") {
        setTaskStatus((prev)=>{
          return {...prev, remaining_tasks: prev.remaining_tasks + 1}
        })
      }
    }
  }, [tasks]);

  return (
    <div className="bg-slate-200 rounded-xl p-6 flex flex-col gap-4 w:full md:w-2/5">
      <section className="bg-purple-700 rounded-md text-white p-4 shadow-md">
        <h1 className="font-bold text-center text-3xl p-2">Summary</h1>
        <ul className="flex flex-col justify-start items-start gap-2 p-2 bg-white text-black m-2 rounded shadow">
          <li className="border-b-2">{tasks.length} Total tasks</li>
          <li className="border-b-2">{task_status.completed_tasks} tasks completed</li>
          <li className="border-b-2">{task_status.ongoing_tasks} tasks ongoing</li>
          <li className="border-b-2">{task_status.remaining_tasks} tasks remaining</li>
        </ul>
      </section>

      <section>
        <h1>Todays Quote</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          temporibus accusantium qui porro quo. Facere culpa saepe consectetur
          consequatur dolore.
        </p>
      </section>
    </div>
  );
};

export default Sidebar;
