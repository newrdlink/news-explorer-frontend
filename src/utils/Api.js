import React from "react";
import handleResponse from "./utils";

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
  }

  getAppStartInfo(token) {
    return Promise.all([this.getUserData(token), this.getInitialCards(token)]);
  }

  getUserData(token) {
    return fetch(`${this.address}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
    }).then(handleResponse);
  }

  getInitialCards(token) {
    return fetch(`${this.address}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
    }).then(handleResponse);
  }

  addNewCard(data, token) {
    return fetch(`${this.address}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        link: data.url,
        keyword: data.keyword,
        title: data.title,
        text: data.description,
        date: data.publishedAt,
        source: data.source.name,
        image: data.urlToImage,
      }),
    }).then(handleResponse);
  }

  removeCard(cardID, token) {
    return fetch(`${this.address}/articles/${cardID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
    }).then(handleResponse);
  }
}
//создаем экземпляр API
const api = new Api({
  address: "https://api.news.wd-rd.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
