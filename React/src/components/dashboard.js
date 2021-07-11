import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";
import { Link, useHistory } from "react-router-dom";
import APIService from "./APIService";
import { useCookies } from "react-cookie";

const Dashboard = ({
  user,
  bookName,
  statusName,
  users,
  orders,
  editBtn,
  deleteBtn,
}) => {
  const history = useHistory();

  // const editBtn = (order) => {
  // console.log(id);
  // let path = `/edit_order/${id}`;
  // history.push(path);
  // props.editBtn(order);
  // };
  const [token] = useCookies(["mytoken"]);
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

              {users.map((userName) => {
                return (
                  <tr key={userName.id}>
                    <td>
                      {/* <Link className="btn btn-sm btn-info" to="/customer">
                        View
                      </Link> */}
                    </td>
                    <td>{userName.name}</td>
                    <td>{userName.phone}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>

        <div className="col-md-7">
          <h5>LAST 5 TRANSACTIONS</h5>
          <hr />
          <div className="card card-body">
            <table className="table table-sm">
              <tr>
                <th>OrderID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
              {orders.map((order) => {
                return (
                  <tr>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>{order.date_created}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link
                        className="btn btn-sm btn-info"
                        // to="/edit_order/"
                        onClick={() => {
                          editBtn(order);
                        }}
                      >
                        Update
                      </Link>
                    </td>

                    <td>
                      <Link
                        onClick={() => {
                          APIService.DeleteOrder(order.id, token["mytoken"])
                            .then(() => deleteBtn(order))
                            .catch((error) => console.log(error));
                        }}
                        className="btn btn-sm btn-danger"
                        // to="/delete"
                      >
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

export default Dashboard;
