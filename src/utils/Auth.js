import React from "react";
import handleResponse from "./utils";

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
  }

  signIn(data) {
    return fetch(`${this.address}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then(handleResponse);
  }

  signUp(data) {
    return fetch(`${this.address}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email,
        name: data.name,
      }),
    }).then(handleResponse);
  }
}

const apiAuth = new Api({
  address: "https://api.didrom.ru",
  // address: "https://api.dr14.students.nomoredomains.work",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiAuth;
