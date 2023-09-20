//import axios
import axios from "axios";

const Api = axios.create({
  //set default endpoint API
  baseURL: "http://api-jwt.test",
});

export default Api;
