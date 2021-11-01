import axios from 'axios';

const url = 'http://localhost:2000/api/user_ticket'

export const createNew = (bookTicket) => axios.post(url, bookTicket);
