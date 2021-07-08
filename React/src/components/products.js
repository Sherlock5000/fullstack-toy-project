import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";

const Products = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <div className="row">
        <div className="col-md">
          <div className="card card-body">
            <h5>Products</h5>
          </div>
          <div className="card card-body">
            <table className="table">
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
              </tr>

              <tr>
                <td>Book1</td>
                <td>Fiction</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Book2</td>
                <td>Thriller</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Book3</td>
                <td>Biography</td>
                <td>15</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
