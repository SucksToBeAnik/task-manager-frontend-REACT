import { BiLoaderCircle } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import SingleTask from "./SingleTask";
import { apiGetTasks, apiAddTask } from "../api/apiTasks";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import zustandStore from "../store/store";
import AddTaskForm from "./AddTaskForm";
import { motion } from "framer-motion";


const bgColor = ["bg-orange-400","bg-purple-400","bg-violet-400","bg-rose-400"]


const TaskContainer = () => {
  const tasks = zustandStore((state) => state.tasks);
  const getTasks = zustandStore((state) => state.getTasks);
  const formActive = zustandStore(state=>state.formActive)
  const  setFormActive = zustandStore(state => state.setFormActive)




  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getTasks"],
    queryFn: apiGetTasks,
  });

  // const {data: addTaskData} = useMutation({
  //   mutationKey:["addTask"],
  //   mutationFn: apiAddTask
  // })

  // console.log(addTaskData);

  // section: SideEffects
  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }

    return () => toast.dismiss();
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess) {
      getTasks(data);
    }
  }, [isSuccess, data, getTasks]);
  // !section end of sideEffects

  return (
    <div className="p-6 bg-slate-200 rounded-xl min-h-screen w-full md:w-3/5 relative">

      {formActive && <div className="w-full h-full absolute inset-0">
        <AddTaskForm />
        </div>}
      


      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-center text-4xl md:text-6xl p-2">
          Task Manager
          {isLoading ? (
            <BiLoaderCircle className="animate-[spin_2s_linear_infinite] inline-block text-3xl mx-4 text-green-500" />
          ) : (
            <motion.div animate={{
              scale: formActive?  1 : [0,1]
            }} className="inline-block">
            <MdOutlineDone className="text-2xl bg-green-500 text-white rounded shadow-md inline-block mx-4" />
            </motion.div>
          )}
        </h1>

        <button className="rounded-xl shadow-md text-4xl p-2" onClick={()=>setFormActive(true)}>
          <FaPlus />
        </button>
      </div>

      <ul className="flex flex-col gap-4 px-4 py-12">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <SingleTask bgColor={bgColor[Math.round(Math.random()*(bgColor.length - 1))]} task={task} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskContainer;
