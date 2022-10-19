import "./styles/App.css";
import React from "react";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <AppRouter/>
    </div>
  );
}

export default App;
