import React from "react";
import ReactDOM from "react-dom";
import Tours from "./tours.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Route path="/tours/:tourId" component={Tours} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
