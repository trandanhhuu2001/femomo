import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const sendProductList = (productList) => {
  return axios
    .post(`${API_URL}/product/buy`, productList)
    .then((response) => {
      console.log(response)
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
