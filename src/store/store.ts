import { create } from "zustand";
import { type Task } from "../types/type";

// @Type Definitions
export interface InitialState {
  tasks: Task[] | [];
}
export interface Actions {
  addTask: (task: Task) => void;
}
// @End of Type Definitios




const initialState: InitialState = {
  tasks: [],
};



const store = create<InitialState & Actions>((set) => ({
  ...initialState,
  addTask: (task) => set({tasks: [...initialState.tasks,task]})
}));

export default store;
