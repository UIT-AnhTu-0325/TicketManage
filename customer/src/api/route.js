import axios from 'axios';

const url = 'http://localhost:2000/api/route'

export const getAll = () => axios.get(url);
export const getById = (id) => axios.get(`${url}/${id}`);
export const createNew = (newRoute) => axios.post(url, newRoute);