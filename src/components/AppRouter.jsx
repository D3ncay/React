import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { publicRoutes } from "../router";
import { privateRoutes } from "./../router/index";
import { AuthContext } from "./../context/index";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth)
  if(isLoading){
    return <h1>Загрузка...</h1>
  }

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => <Route key={route.path} {...route} />)
        : publicRoutes.map((route) => <Route key={route.path} {...route} />)}
    </Routes>
  );
};

export default AppRouter;
