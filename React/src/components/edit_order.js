import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, useParams } from "react-router-dom";

const EditOrder = ({ products = [], setBookName, setStatusName, orders }) => {
  const history = useHistory();
  const [book, setBook] = useState("");
  const [status, setStatus] = useState("");

  const handleUpdate = (e) => {
    // const { id } = useParams;
    orders.filter();
    e.preventDefault();
    setBookName(book);
    setStatusName(status);
    // newBook = book;
    // newStatus = status;
    console.log(book, status);
    let path = `/dashboard`;
    history.push(path);
  };

  return (
    <>
      <form className="form-inline">
        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
          Book
        </label>

        <select
          className="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          onChange={(e) => setBook(e.target.value)}
        >
          {products.map((product) => {
            return <option value={product.name}>{product.name}</option>;
          })}
        </select>

        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
          Status
        </label>
        <select
          className="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option selected>Choose...</option>
          <option value="Pending">Pending</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
        </select>

        <button
          type="submit"
          className="btn btn-success my-1"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </>
  );
};

export default EditOrder;
