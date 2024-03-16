export type Task = {
    id: number,
    title: string,
    body: string,
    status: 'Ongoing' | 'Completed' | "Will Do",
    notes: {
        id: number,
        task_id: number,
        title: string,
        body: string
    }[] | []

}

export interface CreateTask{

    title: string,
    body: string,
    status: 'Ongoing' | 'Completed' | "Will Do"
}



export interface UpdateTask extends CreateTask {
    id: number,
    
}

export type TaskList = Task[] | []


