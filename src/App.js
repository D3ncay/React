import "./styles/App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/index";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <div className="wrapper">
        <NavBar />
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
