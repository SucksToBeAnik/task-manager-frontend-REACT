import axios from "axios"




export default async function getTasks(){
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

