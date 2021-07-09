import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";
// import { useCookies } from "react-cookie";

const Products = ({ user, products = [] }) => {
  // const [token] = useCookies(["mytoken"]);
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
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
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

export default Products;
