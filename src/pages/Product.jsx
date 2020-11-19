import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCardGrid from "../components/blocks/ProductCardGrid";
import { load as productsLoad } from "../store/product/actions";
import { create, load as ordersLoad, payment } from "../store/order/actions";
import { add, clear } from "../store/cart/actions";
import OrderCard from "../components/blocks/OrderCard";

function Product(props) {
  const {
    products,
    orders,
    cart,
    productsLoad,
    ordersLoad,
    orderCreate,
    addToCart,
    clearCart,
    payment
  } = props;

  useEffect(() => {
    ordersLoad();
    productsLoad();
  }, []);

  const onOrderCreateHandler = (event) => {
    if (cart.products.length > 0) {
      orderCreate(cart.products);
      clearCart();
    }
  };

  return (
    <div className="row mt-3">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12">
            <button className="btn btn-primary mr-1">Update</button>
            <button
              className="btn btn-warning mr-1"
              onClick={onOrderCreateHandler}
            >
              Create Order
            </button>
            <button className="btn btn-success mr-1">
              Buy ({cart.products.length})
            </button>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <OrderCard orders={orders} payment={payment} ordersLoad={ordersLoad}/>
          </div>
        </div>
        <div className="row mt-2">
          <ProductCardGrid products={products} onAddHandler={addToCart} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  status: state.product.status,
  products: state.product.products || [],
  orders: state.order.orders || [],
  cart: state.cart,
});

const mapDispatchToProps = {
  productsLoad,
  orderCreate: create,
  addToCart: add,
  clearCart: clear,
  ordersLoad,
  payment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
