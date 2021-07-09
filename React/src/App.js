import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Dashboard from "./components/dashboard";
import Customer from "./components/customer";
import Products from "./components/products";
import Delete from "./components/delete";
import Login from "./components/login";
import Register from "./components/register";
import PlaceOrder from "./components/place_order";
import EditOrder from "./components/edit_order";
import Form from "./components/form";
import Loginnew from "./components/loginnew";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";

function App() {
  const [user, setUser] = useState("");
  const [bookName, setBookName] = useState("");
  const [statusName, setStatusName] = useState("");

  // full-stack
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editOrder, setEditOrder] = useState(null);
  const [token, setToken, removeToken] = useCookies(["mytoken"]);

  let history = useHistory();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/viewset/product/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["mytoken"]}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setProducts(resp))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/viewset/customer/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token a3f0dd7e999455c01df1a12449c464195f260b0a",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setUsers(resp))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/viewset/order/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token a3f0dd7e999455c01df1a12449c464195f260b0a",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setOrders(resp))
      .catch((error) => console.log(error));
  }, []);

  const editBtn = (order) => {
    setEditOrder(order);
  };

  const updatedInformation = (order) => {
    const new_order = orders.map((myorder) => {
      if (myorder.id === order.id) {
        return order;
      } else {
        return myorder;
      }
    });
    setOrders(new_order);
  };

  const orderForm = () => {
    setEditOrder({ product: "", status: "" });
  };

  const insertedInformation = (order) => {
    const new_orders = [...orders, order];
    setOrders(new_orders);
  };

  const deleteBtn = (order) => {
    const new_orders = orders.filter((myorder) => {
      if (myorder.id === order.id) {
        return false;
      }
      return true;
    });
    setOrders(new_orders);
  };

  const logoutBtn = () => {
    removeToken(["mytoken"]);
  };

  // useEffect(() => {
  //   if (!token["mytoken"]) {
  //     history.push("/login");
  //     window.location.href = "/login";
  //   }
  // }, [token]);
  // useEffect(() => {
  //   fetch(`http://127.0.0.1:8000/viewset/order/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Token a3f0dd7e999455c01df1a12449c464195f260b0a",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((resp) => setOrders(resp))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <Router>
        <Switch>
          <CookiesProvider>
            <Route path="/login">
              <Loginnew />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <div className="row">
                <div className="col">
                  <button onClick={orderForm} className="btn btn-primary">
                    Insert Order
                  </button>
                </div>

                {/* <div className="col">
                  <button onClick={logoutBtn} className="btn btn-primary">
                    Logout
                  </button>
                </div> */}
              </div>
              <Dashboard
                user={user}
                bookName={bookName}
                statusName={statusName}
                users={users}
                orders={orders}
                editBtn={editBtn}
                deleteBtn={deleteBtn}
              />
              <br />
              {editOrder ? (
                <Form
                  order={editOrder}
                  updatedInformation={updatedInformation}
                  insertedInformation={insertedInformation}
                />
              ) : null}
            </Route>
          </CookiesProvider>
          <Route path="/customer">
            <Customer
              user={user}
              bookName={bookName}
              statusName={statusName}
              users={users}
              orders={orders}
            />
          </Route>
          <Route path="/products">
            <Products user={user} products={products} />
          </Route>
          <Route path="/delete">
            <Delete
              user={user}
              setUser={setUser}
              setBookName={setBookName}
              setStatusName={setStatusName}
            />
          </Route>
          <Route path="/place_order">
            <PlaceOrder
              user={user}
              setBookName={setBookName}
              setStatusName={setStatusName}
            />
          </Route>
          <Route path="/edit_order">
            <EditOrder
              products={products}
              setBookName={setBookName}
              setStatusName={setStatusName}
              orders={orders}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
