import React from "react";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

function App() {
  return (
    <div>
      <Nav />
      <Login />
    </div>
  );
}

export default App;
