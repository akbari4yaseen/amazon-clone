import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-a7d5a/us-central1/api", // API URL
});

export default instance;
