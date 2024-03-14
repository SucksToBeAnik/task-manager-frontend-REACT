import { TaskList, createUpdateTask } from "../types/type"

import axios from "axios"

export async function apiGetTasks():Promise<TaskList>{
    try{
        const reponse = await axios({
            method:'get',
            url:'/tasks'
        })
        return reponse.data
    }catch(err ){
        if(axios.isAxiosError(err)){
            throw new Error(err.message)
        }else{
            throw new Error('There was an error while making the request!')
        }
    }
}

export async function apiAddTask(task:createUpdateTask){
    try{
        const response = await axios({
            method:'post',
            url:`/tasks/${task.id}`,
            data:{
                title:task.title,
                body: task.body,
                status:task.status
            }
        })

        return response
    }catch(err){
        if(axios.isAxiosError(err)){
            throw new Error(err.message)
        }else{
            throw new Error('There was an error while making the request!')
        }
    }
    
}

export async function apiUpdateTask(task:createUpdateTask){
    try{
        const response = await axios({
            method:'put',
            url:`/tasks/${task.id}`,
            data:{
                title:task.title,
                body: task.body,
                status:task.status
            }
        })

        return response
    }catch(err){
        if(axios.isAxiosError(err)){
            throw new Error(err.message)
        }else{
            throw new Error('There was an error while making the request!')
        }
    }
    
}

export async function apiDeleteTask(id:number){
    try{
        const response = await axios({
            method:'delete',
            url:`/tasks/${id}`
        })

        return response
    }catch(err){
        if(axios.isAxiosError(err)){
            throw new Error(err.message)
        }else{
            throw new Error('There was an error while making the request!')
        }
    }
}

