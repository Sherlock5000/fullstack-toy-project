import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";
import { Link } from "react-router-dom";

const Dashboard = ({ user, bookName, statusName }) => {
  return (
    <>
      <Navbar user={user} />
      <br />

      <div className="row">
        <div className="col-md-5">
          <h5>CUSTOMERS:</h5>
          <hr />
          <div className="card card-body">
            <table className="table table-sm">
              <tr>
                <th></th>
                <th>Customer</th>
                <th>Phone</th>
              </tr>

              <tr>
                <td>
                  <Link className="btn btn-sm btn-info" to="/customer">
                    View
                  </Link>
                </td>
                <td>{user}</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="col-md-7">
          <h5>LAST 5 TRANSACTIONS</h5>
          <hr />
          <div className="card card-body">
            <table className="table table-sm">
              <tr>
                <th>Customer</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>

              <tr>
                <td>{user}</td>
                <td>{bookName}</td>
                <td></td>
                <td>{statusName}</td>
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
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
