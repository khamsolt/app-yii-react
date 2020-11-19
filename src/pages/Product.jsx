import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCardGrid from "../components/blocks/ProductCardGrid";
import { fetch } from "../store/product/actions";

function Product(props) {
  const { products, fetch } = props;

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="row mt-3">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12">
            <button className="btn btn-primary">Update</button>
            <hr />
          </div>
        </div>
        <div className="row">
          <ProductCardGrid products={products} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  status: state.product.status,
  products: state.product.products,
});

const mapDispatchToProps = {
  fetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
