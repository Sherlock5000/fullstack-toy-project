import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./navbar/navbar";

const Delete = ({ user, setUser, setBookName, setStatusName }) => {
  const history = useHistory();

  const handleDelete = (e) => {
    let path = `/dashboard`;
    history.push(path);
    setUser("");
    setBookName("");
    setStatusName("");
  };
  return (
    <>
      <Navbar user={user} />
      <div className="row">
        <div className="col-md-6">
          <div className="card card-body">
            <p>Are you sure you want to delete?</p>

            <form action="{% url 'delete_order' item.id  %}" method="POST">
              <Link className="btn btn-warning" to="/dashboard">
                Cancel
              </Link>

              <input
                className="btn btn-danger"
                type="submit"
                name="Confirm"
                onClick={handleDelete}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
