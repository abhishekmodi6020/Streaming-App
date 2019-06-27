import Axios from "axios";

// creating axios instance
export default axios.create({
  // TODO: change baseURL when deploying on cloud
  baseURL: "http://localhost:3001"
});
