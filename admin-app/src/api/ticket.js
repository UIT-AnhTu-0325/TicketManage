import axios from "../helpers/axios";

const TicketApi = {
  getAll: async () => {
    const res = await axios.get(`ticket`);

    return res;
  },

  create: async (form) => {
    const res = await axios.post(`ticket/create`, {
      ...form,
    });

    return res;
  },

  getReport: async (form) => {
    axios.defaults.timeout = 1000000;

    const res = await axios.post(`ticket/getReport`, { ...form });

    return res;
  },
};

export default TicketApi;
