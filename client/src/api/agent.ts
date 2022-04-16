import axios from "axios";

axios.defaults.baseURL = "/api";

const requests = {
  get: <T>(url: string) => axios.get<T>(url),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body),
  delete: <T>(url: string) => axios.delete<T>(url),
};

const Posts = {
  getPosts: () => requests.get<Posts[]>("/posts"),
};

const agent = {
  Posts,
};

export default agent;
