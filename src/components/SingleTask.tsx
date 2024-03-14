import { FC } from "react";
import { Task as T } from "../types/type";
import { MdDelete, MdEdit } from "react-icons/md";

interface TaskProps {
  task: T;
  bgColor: string
}

const SingleTask: FC<TaskProps> = ({ task, bgColor }) => {
  return (
    <div className={`rounded-md shadow px-4 py-8 ${bgColor} text-zinc-100`}>
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-4xl mb-4 font-semibold">{task.title}</h1>

        <div className="flex justify-center items-center gap-8 text-2xl">
          <button className="rounded-xl p-2 shadow">
            <MdEdit />
          </button>
          <button className="rounded-xl p-2 shadow">
            <MdDelete />
          </button>
        </div>
      </div>
      <p>{task.body}</p>
    </div>
  );
};

export default SingleTask;
