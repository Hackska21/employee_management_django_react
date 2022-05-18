import axios from 'axios';

export default axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/employees/",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})