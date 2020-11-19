import axios from "axios";

const baseURL = "https://app-yii.com/api/v1";

const API = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
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
  async create(productIds) {
    let data = {
      productIds,
    };
    return await API.post("/order/create", data);
  },

  async payment(orderId, sumPrice) {
    let data = {
      orderId,
      sumPrice,
    };
    return await API.post("/order/pay", data);
  },

  async getOrders() {
    return await API.post(
      "order/items?fields=id,customer_id,status&expand=products"
    );
  },
};

export { app, order, product };
