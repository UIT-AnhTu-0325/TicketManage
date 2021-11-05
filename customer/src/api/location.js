import axios from 'axios';

const url = 'http://localhost:2000/api/location'

export const fetch = () => axios.get(`${url}/fetch`);