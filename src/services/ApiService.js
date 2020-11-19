import axios from "axios";

const baseURL = "https://app-yii.com/api/v1";

const API = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "Json",
    Autorization: "Bearer",
  },
  withCredentials: false,
});

const app = {
  async getUser() {
    return await API.get("/app/user");
  },
};

const product = {
  async getProducts() {
    return await API.get("/product/items");
  },
};

const order = {
  async create(productId) {
    let data = {
      data: {
        productId,
      },
    };
    return await API.post("/order/create", data);
  },

  async pai(orderId, sumPrice) {
    let data = {
      data: {
        orderId,
        sumPrice,
      },
    };
    return await API.post("/order/pai", data);
  },
};

export { app, order, product };
