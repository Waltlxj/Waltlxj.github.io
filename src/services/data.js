import axios from "axios";
const url = "https://api.npoint.io/1c65b360d813545e3043";

const getData = async () => {
  const request = axios.get(url);
  const response = await request;
  return response.data;
};

const exportObj = { getData };
export default exportObj;
