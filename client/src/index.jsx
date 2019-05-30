import React from "react";
import ReactDOM from "react-dom";
import Tours from "./tours.jsx";
import { BrowserRouter, Route } from "react-router-dom";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Route path="/tours/:tourId" component={Tours} />;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Reviews />
  </BrowserRouter>,
  document.getElementById("reviews")
);
