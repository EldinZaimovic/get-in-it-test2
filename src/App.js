import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import MainArea from "./components/MainArea";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route exact path="/" component={MainArea} />
        <Route exact path="/post/:id" component={SinglePost} />
      </div>
    </Router>
  );
}

export default App;
