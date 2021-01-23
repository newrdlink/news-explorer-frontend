import React from "react";

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
  }

  // getAppStartInfo(token) {
  //   return Promise.all([this.getUserData(token), this.getInitialCards(token)]);
  // }

  // getUserData(token) {
  //   return fetch(`${this.address}/users/me`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": `Bearer ${token}`
  //     },
  //   }).then(handleResponse);
  // }

  // getInitialCards(token) {
  //   return fetch(`${this.address}/cards`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": `Bearer ${token}`
  //     },
  //   }).then(handleResponse);
  // }

  // patchUserData(data, token) {
  //   return fetch(`${this.address}/users/me`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": `Bearer ${token}`
  //     },
  //     body: JSON.stringify({
  //       name: data.name,
  //       about: data.about,
  //     }),
  //   }).then(handleResponse);
  // }

  // addNewCard(data, token) {
  //   return fetch(`${this.address}/cards`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": `Bearer ${token}`
  //     },
  //     body: JSON.stringify({
  //       name: data.name,
  //       link: data.link,
  //     }),
  //   }).then(handleResponse);
  // }

  // changeAvatar(data, token) {
  //   return fetch(`${this.address}/users/me/avatar`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": `Bearer ${token}`
  //     },
  //     body: JSON.stringify({
  //       avatar: data.avatar,
  //     }),
  //   }).then(handleResponse);
  // }

  // removeCard(cardID, token) {
  //   return fetch(`${this.address}/cards/${cardID}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": `Bearer ${token}`
  //     },
  //   }).then(handleResponse);
  // }

  // likeCard(cardID, token) {
  //   return fetch(`${this.address}/cards/${cardID}/likes/`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": `Bearer ${token}`
  //     },
  //   }).then(handleResponse);
  // }

  // dislikeCard(cardID, token) {
  //   return fetch(`${this.address}/cards/${cardID}/likes/`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": `Bearer ${token}`
  //     },
  //   }).then(handleResponse);
  // }
}
//создаем экземпляр API
const api = new Api({
  address: "https://api.dr14.students.nomoredomains.work",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
