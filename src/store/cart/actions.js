const { ADD_TO_CART, CLEAR_CART } = require("./types");

const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

const clearCart = () => ({
  type: CLEAR_CART,
  products: [],
});

export const add = (productId) => (dispatch, getStore) => {
  let products = getStore().cart.products;
  products.push(productId);
  dispatch(addToCart(products));
};

export const clear = () => (dispatch, getStore) => {
  dispatch(clearCart());
};
