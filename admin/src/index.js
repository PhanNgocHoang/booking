import React from "react";
import ReactDOM from "react-dom";
import Cms from './cms'

const root = document.getElementById("container");
root ? ReactDOM.render(<Cms />, root) : false;
