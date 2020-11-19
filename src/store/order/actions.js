import { order } from "../../services/ApiService";
import {
  ORDER_CREATING,
  ORDER_CREATED,
  ORDER_ERROR,
  ORDER_PAY,
  ORDER_PAID,
  ORDER_LOADED,
  ORDER_STATUS,
} from "./types";

const creating = () => ({
  type: ORDER_CREATING,
});

const created = (payload) => ({
  type: ORDER_CREATED,
  payload,
});

const fail = (payload) => ({
  type: ORDER_ERROR,
  payload,
});

const pay = () => ({
  type: ORDER_PAY,
});

const paid = (payload) => ({
  type: ORDER_PAID,
  payload,
});

const status = (payload) => ({
  type: ORDER_STATUS,
  payload,
});

const loaded = (payload) => ({
  type: ORDER_LOADED,
  payload,
});

export const create = (ids) => async (dispatch, getStore) => {
  try {
    dispatch(creating());
    const { data } = await order.create(ids);
    dispatch(created(data));
  } catch (error) {
    dispatch(fail(error));
  }
};

export const payment = (orderId, sumPrice) => async (dispatch, getStore) => {
  try {
    dispatch(pay());
    const { data } = await order.payment(orderId, sumPrice);
    dispatch(paid(data));
  } catch (error) {
    dispatch(fail(error));
  }
};

export const load = () => async (dispatch, getStore) => {
  try {
    dispatch(status("loading"));
    const {data} = await order.getOrders();
    dispatch(loaded(data));
    dispatch(status("loaded"));
  } catch (error) {
    fail(error);
  }
};
