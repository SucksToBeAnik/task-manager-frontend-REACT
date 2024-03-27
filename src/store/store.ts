import { create } from "zustand";
import { type TaskList, UpdateTask, Task } from "../types/type";

// @Type Definitions
export interface InitialState {
  formActive: boolean;
  tasks: TaskList;
}
export interface Actions {
  getTasks: (taskList: TaskList) => void;
  updateTask: (task: UpdateTask) => void;
  deleteTask: (id:number) => void;
  addTask: (task:Task) => void;
  setFormActive: (current: boolean)=> void
}
// @End of Type Definitios




const initialState: InitialState = {
  formActive: false,
  tasks: [],
};



const zustandStore = create<InitialState & Actions>((set) => ({
  ...initialState,
  setFormActive: (current)=> set((state)=>{
    return {...state,formActive: current}
  } ),
  getTasks: (taskList:TaskList) => set(()=> ({tasks: [...taskList] })),
  addTask: (task:Task)=> set((state)=>{
    return {tasks: [...state.tasks, task]}
  }),
  updateTask: (task:UpdateTask) => set((state)=>{
    const task_to_update = state.tasks.find((t)=> t.id === task.id)

    if(task_to_update){
      task_to_update.title = task.title
      task_to_update.body = task.body
      task_to_update.status = task.status
    }
    return {tasks:[...state.tasks]}
  }),

  deleteTask: (id)=> set((state)=>{
    console.log("BEFORE:",state.tasks);
    const new_task_list = state.tasks.filter((task)=> task.id !== id)

    console.log("AFTER:",new_task_list);



    return {tasks: [...new_task_list]}
  })
  
}));

export default zustandStore;
