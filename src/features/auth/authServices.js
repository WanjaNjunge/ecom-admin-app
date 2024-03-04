import axios from "axios";
// import { config } from "../../utils/axiosconfig";
import { baseUrl } from "../../utilis/baseUrl";


const login = async (userData) => {
  const response = await axios.post(`${baseUrl}user/admin-login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const getOrders = async () => {
  const response = await axios.get(`${baseUrl}user/getallorders`, 
//   config
  );

  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.post(
    `${baseUrl}user/getorderbyuser/${id}`,
    "",
    // config
  );

  return response.data;
};

const authService = {
  login,
  getOrders,
  getOrder,
};

export default authService;
