import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('item');

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};