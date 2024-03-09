export interface Task {
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

}[]


