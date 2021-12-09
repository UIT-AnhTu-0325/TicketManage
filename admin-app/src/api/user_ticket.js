import axios from 'axios';

const url = 'http://localhost:2000/api/user_ticket'

export const createNew = (bookTicket) => axios.post(url, bookTicket);
export const getAll = () => axios.get(url);
export const update = (bookTicket, id) => axios.put(`${url}/${id}`, bookTicket);
