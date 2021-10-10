import axios from 'axios';

const url = 'http://localhost:2000/api/ticket'

export const getAll = () => axios.get(url);
export const getById = (id) => axios.get(`${url}/${id}`);
export const createNew = (newTicket) => axios.post(url, newTicket);