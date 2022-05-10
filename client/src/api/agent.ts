import axios from "axios";

axios.defaults.baseURL = "/api";

const profile = localStorage.getItem("profile");
const googlePorfile = localStorage.getItem("googleProfile");

axios.interceptors.request.use((req) => {
  if (profile || googlePorfile) {
    req.headers.Authorization = `Bearer ${
      profile ? JSON.parse(profile) : JSON.parse(googlePorfile as string)
    }`;
  }
  return req;
});

const requests = {
  get: <T>(url: string) => axios.get<T>(url),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body),
  delete: <T>(url: string) => axios.delete<T>(url),
};

const Posts = {
  getPosts: () => requests.get<Post[]>("/posts"),
  getPostById: (selectedPostId: string) =>
    requests.get<Post>(`/posts/${selectedPostId}`),
  createPosts: (newPost: Post) => requests.post<Post>("/posts", newPost),
  updatePosts: (updatedPost: Post) =>
    requests.put<Post>(`/posts/${updatedPost._id}`, updatedPost),
  deletePostById: (deletePostId: string) =>
    requests.delete(`/posts/${deletePostId}`),
  likePostById: (likedPost: Post) =>
    requests.put<Post>(`/posts/${likedPost._id}/likePost`, likedPost),
};

const Users = {
  signIn: (formData: SignInForm) =>
    requests.post<CustomUser>("/users/signin", formData),
  signUp: (formData: SignUpForm) =>
    requests.post<CustomUser>("/users/signup", formData),
};

const agent = {
  Posts,
  Users,
};

export default agent;
