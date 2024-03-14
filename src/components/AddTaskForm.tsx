import { MdOutlineClose } from "react-icons/md";
import zustandStore from "../store/store";
import { motion } from "framer-motion";

const AddTaskForm = () => {
  const setFormActive = zustandStore((state) => state.setFormActive);
  

  return (
    <div className="flex justify-center items-center mx-auto w-full h-full bg-slate-200/20 backdrop-blur-md rounded-xl z-20">
      <motion.form animate={{
        scale:[0,1]
      }} className="rounded p-4 md:p-8 shadow-md bg-gray-500 text-white flex flex-col justify-center items-start w-3/4 gap-4">
        <div className="flex justify-between items-center gap-2 self-center mb-6 mt-2 w-full">
          <h1 className="text-3xl font-bold">Add a new task</h1>
          <button
            className="rounded-full border-2 shadow-md text-xl p-1"
            onClick={() => setFormActive(false)}
          >
            <MdOutlineClose />
          </button>
        </div>

        <div className="w-full text-xl">
          <label
            htmlFor="title"
            className="inline-block w-24 bg-gray-700 text-white text-center rounded-l-md p-1"
          >
            Title
          </label>
          <input type="text" id="title" name="title" className="w-[calc(100%-6rem)] rounded-r-md py-1 focus:outline-none text-black pl-2" />
        </div>

        <div className="w-full text-xl">
          <label
            htmlFor="body"
            className="inline-block w-24 bg-gray-700 text-white text-center rounded-l-md p-1"
          >
            Body
          </label>
          <input type="text" id="body" name="body" className="w-[calc(100%-6rem)] rounded-r-md py-1 focus:outline-none text-black pl-2" />
        </div>
      </motion.form>
    </div>
  );
};

export default AddTaskForm;
