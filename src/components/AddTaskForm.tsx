import { MdOutlineClose } from "react-icons/md";
import { BiLoaderCircle } from "react-icons/bi";

import zustandStore from "../store/store";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddTask } from "../api/apiTasks";
import toast from "react-hot-toast";

const AddTaskForm = () => {
  const queryClient = useQueryClient();

  const setFormActive = zustandStore((state) => state.setFormActive);
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const status = useRef<HTMLSelectElement>(null);

  const { mutate, isPending, isError } = useMutation({
    mutationKey: ["addTask"],
    mutationFn: apiAddTask,
    onSuccess: () => {
      toast.success("Task Added!");

      queryClient.invalidateQueries({
        queryKey: ["getTasks"],
      });
      setFormActive(false);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (title.current!.value && status.current!.value) {
      const statusList = ["Ongoing", "Completed", "Will Do"];
      const currentStatus =
        statusList.find((s) => s === status.current!.value) || "Ongoing";

      mutate({
        title: title.current!.value,
        body: description.current!.value,
        status: currentStatus as "Ongoing" | "Completed" | "Will Do",
      });
    }
  }

  return (
    <div className="flex justify-center items-center mx-auto w-full h-full bg-slate-200/20 backdrop-blur-md rounded-xl z-20">
      <motion.form
        method="post"
        animate={{
          scale: [0, 1],
        }}
        onSubmit={handleSubmit}
        className="rounded-md p-4 md:p-8 shadow-xl bg-purple-500 text-white flex flex-col justify-center items-start w-3/4 gap-y-4 fixed top-[25px]"
      >
        <div className="flex justify-between items-center gap-2 self-center mb-1 mt-2 w-full">
          <h1 className="text-3xl font-bold p-2">Add a new task</h1>

          <button
            className="rounded-full border-2 shadow-md text-xl p-1"
            onClick={() => setFormActive(false)}
          >
            <MdOutlineClose />
          </button>
        </div>

        {(isPending && !isError) && (
          <motion.div
            animate={{
              scale: [0, 1],
            }}
            className="inline-block p-4"
          >
            <BiLoaderCircle className="animate-[spin_2s_linear_infinite] inline text-xl" />
            <span className="ml-2">Adding Task</span>
          </motion.div>
        )}

        <div className="w-full text-xl mt-5">
          {/* <label
            htmlFor="title"
            className="inline-block w-24 bg-gray-700 text-white text-center rounded-l-md p-1"
          >
            Title
          </label> */}
          <input
            required
            placeholder="Give a title..."
            type="text"
            id="title"
            name="title"
            ref={title}
            className="w-full rounded-md py-1 focus:outline-none text-black pl-2"
          />
        </div>

        <div className="w-full text-xl">
          {/* <label
            htmlFor="body"
            className="inline-block w-24 bg-gray-700 text-white text-center rounded-l-md p-1"
          >
            Body
          </label> */}
          <textarea
            ref={description}
            rows={5}
            placeholder="Add a description..."
            id="body"
            name="body"
            className="w-full rounded-md py-1 focus:outline-none text-black pl-2"
          />
        </div>

        <div className="">
          <select
            ref={status}
            name="status"
            id="status"
            className="rounded shadow p-2 bg-white text-black"
          >
            <option value="" className="text-gray-700">
              Task status
            </option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
            <option value="Will do">Will Do</option>
          </select>
        </div>

        <button
          type="submit"
          className="rounded-md shadow-sm p-2 bg-purple-200 text-gray-800 mt-4 font-semibold text-lg text-center "
        >
          Add Task
        </button>
      </motion.form>
    </div>
  );
};

export default AddTaskForm;
