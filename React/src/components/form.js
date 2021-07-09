import React, { useState, useEffect } from "react";
import APIService from "./APIService";
import { useCookies } from "react-cookie";

function Form(props) {
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("");
  const [token] = useCookies(["mytoken"]);
  useEffect(() => {
    setProduct(props.order.product);
    setStatus(props.order.status);
  }, [props.order]);

  const updateOrder = () => {
    APIService.UpdateOrder(
      props.order.id,
      { product, status },
      token["mytoken"]
    ).then((resp) => props.updatedInformation(resp));
  };

  const insertOrder = () => {
    APIService.InsertOrder({ product, status }, token["mytoken"]).then((resp) =>
      props.insertedInformation(resp)
    );
  };

  return (
    <div>
      {props.order ? (
        <div className="mb-3">
          <label htmlFor="product" className="form-label">
            Product
          </label>
          <input
            type="text"
            className="form-control"
            id="product"
            placeholder="Please enter product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          ></input>

          <label htmlFor="status" className="form-label">
            Status
          </label>
          <textarea
            className="form-control"
            id="status"
            rows="1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          ></textarea>
          <br />

          {props.order.id ? (
            <button onClick={updateOrder} className="btn btn-success">
              Update Order
            </button>
          ) : (
            <>
              <label htmlFor="product" className="form-label">
                Customer
              </label>
              <input
                type="text"
                className="form-control"
                id="product"
                placeholder="Please enter Customer"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              ></input>
              <button onClick={insertOrder} className="btn btn-success">
                Insert Order
              </button>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Form;
