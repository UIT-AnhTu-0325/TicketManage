import axios from 'axios';

const url = 'http://localhost:2000/api/trip'

export const getAll = () => axios.get(url);
export const getById = (id) => axios.get(`${url}/${id}`);
export const createNew = (newTrip) => axios.post(url, newTrip);