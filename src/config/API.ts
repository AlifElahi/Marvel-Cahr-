import { create } from "apisauce";

const api = create({
  baseURL: `${process.env.REACT_APP_MARVEL_SERVER_URL}`,
  headers: {
    Accept: `application/json`,
  },
});

export default api;
