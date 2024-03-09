import { useQuery } from "@tanstack/react-query";
import getTasks from "../api/getTasks";
import toast from "react-hot-toast";
import { useEffect } from "react";


const TaskContainer = ()=> {
    const {data, error, isLoading, isError} = useQuery({
        queryKey:['Tasks'],
        queryFn: getTasks
      })
    
      
      useEffect(()=>{
        if(isError){
            toast.error(error.message)
        }
      },[error,isError])

    return (
        <div className="p-6 bg-slate-200 rounded-xl min-h-screen w-full md:w-3/5">
            <h1 className="text-center text-4xl md:text-6xl p-2">Task Manager</h1>
        </div>
    )
}

export default TaskContainer;
