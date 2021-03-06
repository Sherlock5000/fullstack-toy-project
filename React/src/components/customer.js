import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";
import { Link } from "react-router-dom";
import Products from "./products";

const Customer = ({ user, bookName, statusName, users, orders }) => {
  return (
    <>
      <Navbar user={user} />
      <div className="row">
        <div className="col-md">
          <div className="card card-body">
            <h5>Customer:</h5>
            <hr />
            <Link
              className="btn btn-outline-info  btn-sm btn-block"
              to="/place_order"
            >
              Place Order
            </Link>
          </div>
        </div>

        <div className="col-md">
          <div className="card card-body">
            <h5>Contact Information</h5>
            <hr />
          </div>
        </div>

        <div className="col-md">
          <div className="card card-body">
            <h5>Total Orders: {orders.length}</h5>
            <hr />
            <h1 style={{ textAlign: "center", padding: "10px" }}></h1>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col-md">
          <div className="card card-body">
            <table className="table table-sm">
              <tr>
                <th>Product</th>
                <th>Note</th>
                <th>Date Ordered</th>
                <th>Status</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
              {orders.map((order) => {
                return (
                  <tr key={order.id}>
                    <td>{order.product}</td>
                    <td>{order.note}</td>
                    <td>{order.date_created}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link className="btn btn-sm btn-info" to="/place_order">
                        Update
                      </Link>
                    </td>

                    <td>
                      <Link className="btn btn-sm btn-danger" to="/delete">
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
