import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>Welcome</h1>;
};

const root = document.getElementById("container");
root ? ReactDOM.render(<App />, root) : false;
