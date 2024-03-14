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

export type createUpdateTask = {
    id: number,
    title: string,
    body: string,
    status: 'Ongoing' | 'Completed' | "Will Do"
}

export type TaskList = Task[] | []


