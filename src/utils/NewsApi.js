// Your API key is: d5e950fc472f446b9f0c0870d86b2ae2
import React from "react";
import handleResponse from "./utils";
import date from '../utils/periodDate';

class NewsApi extends React.Component {
  constructor({ address, headers, key }) {
    super();
    this.headers = headers;
    this.key = key;
    this.address = address;
  }

  testReqNews() {
    return fetch(`${this.address + "/v2/top-headlines?country=us&apiKey=" + this.key}`, {
      method: "GET",
    }).then(handleResponse)
  }

  searchByRequest(req) {
    return fetch(`${this.address +
      "/v2/everything?q=" +
      req +
      date +
      "&language=ru&apiKey=" +
      this.key}`, {
      method: "GET",
    }).then(handleResponse)
  }
}

const newsApi = new NewsApi({
  address: "https://newsapi.org",
  key: "d5e950fc472f446b9f0c0870d86b2ae2",
})

export default newsApi;
