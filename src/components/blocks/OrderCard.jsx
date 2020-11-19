import React from "react";

function OrderCard(props) {
  const { orders, payment, ordersLoad } = props;

  return (
    <div className="card">
      <div className="card-header">My Orders</div>
      <div className="card-body p-0">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">#Customer ID</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const onClickHandler = async (event) => {
                let sumPrice = 0.0;
                order.products.forEach((element) => {
                  sumPrice += parseFloat(element.price);
                });
                await payment(order.id, sumPrice);
                await ordersLoad();
              };
              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer_id}</td>
                  <td>{order.status}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary btn-block"
                      onClick={onClickHandler}
                    >
                      Buy
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderCard;
