import { FC } from "react";
import { Task as T } from "../types/type";
import { MdDelete, MdEdit } from "react-icons/md";
import { BiLoaderCircle } from "react-icons/bi";

import { useMutation } from "@tanstack/react-query";
import { apiDeleteTask } from "../api/apiTasks";
import zustandStore from "../store/store";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

interface TaskProps {
  task: T;
  bgColor: string;
  id: number
}

const SingleTask: FC<TaskProps> = ({ task, bgColor,id }) => {

  const deleteTask = zustandStore((state) => state.deleteTask);

  const { mutate, isPending } = useMutation({
    mutationKey: ["deleteTask"],
    mutationFn: apiDeleteTask,
    onSuccess: () => {
      deleteTask(task.id);
      toast.success("Toast deleted!");
    },
  });

  function handleDelete() {
    mutate(task.id);
  }

  return (
      <motion.div
      layout
        key={id}
        
        exit={{ opacity:0, height:0}}
        transition={{ duration: 0.2 }}
        className={`rounded-md shadow ${bgColor} text-zinc-100`}
      >
        <div className="px-4 py-8">
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-4xl mb-4 font-semibold">{task.title}</h1>

          <div className="flex justify-center items-center gap-8 text-2xl">
            <button className="rounded-xl p-2 shadow bg-white text-black">
              <MdEdit />
            </button>
            <button onClick={handleDelete} className="rounded-xl p-2 shadow bg-white text-black">
              {isPending ? <BiLoaderCircle className="animate-[spin_2s_linear_infinite]" /> : <MdDelete /> }
              
            </button>
          </div>
        </div>
        <p>{task.body}</p>
        </div>
      </motion.div>
  );
};

export default SingleTask;
