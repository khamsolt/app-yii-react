import { product } from "../../services/ApiService";
import {
  PRODUCTS_STATUS,
  PRODUCTS_LOADED,
} from "./types";

const status = (payload) => ({
  type: PRODUCTS_STATUS,
  payload
});

const loaded = (payload) => ({
  type: PRODUCTS_LOADED,
  payload,
});

export const fetch = () => async (dispatch, getStore) => {
  dispatch(status("loading"));
  try {
    const { data } = await product.getProducts();
    dispatch(loaded(data));
    dispatch(status("loaded"));
  } catch (error) {
    dispatch(status("Products fetching error."));
  }
};
