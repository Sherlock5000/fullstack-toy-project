// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import Dashboard from "./components/dashboard";
import Customer from "./components/customer";
import Products from "./components/products";
import Delete from "./components/delete";
import Login from "./components/login";
import Register from "./components/register";
import PlaceOrder from "./components/place_order";
// import Navbar from "./components/navbar/navbar";

function App() {
  const [user, setUser] = useState("");
  const [bookName, setBookName] = useState("");
  const [statusName, setStatusName] = useState("");

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard
              user={user}
              bookName={bookName}
              statusName={statusName}
            />
          </Route>
          <Route path="/customer">
            <Customer user={user} bookName={bookName} statusName={statusName} />
          </Route>
          <Route path="/products">
            <Products user={user} />
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
