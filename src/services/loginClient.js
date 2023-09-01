import axios from "axios";

const client = axios.create({baseURL:'http://challenge-react.alkemy.org/'})

export const login = async(data)=>{
    return client.post('', data).then(response => response.data)
    .catch( error => {
        console.log(error)
        throw error
    })
}