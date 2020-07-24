import axios from 'axios';

export const testService = (data) => {
    // return axios.get(`http://localhost:3000/db/db.json`)
    return Promise.resolve('Hello '+ data)
}