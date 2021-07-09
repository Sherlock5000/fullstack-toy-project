export default class APIService {
  static UpdateOrder(order_id, body, token) {
    return fetch(`http://127.0.0.1:8000/viewset/order/${order_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static InsertOrder(body, token) {
    return fetch("http://127.0.0.1:8000/viewset/order/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static DeleteOrder(order_id, token) {
    return fetch(`http://127.0.0.1:8000/viewset/order/${order_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static LoginUser(body) {
    return fetch("http://127.0.0.1:8000/gettoken/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static RegisterUser(body) {
    return fetch("http://127.0.0.1:8000/viewset/customer/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
