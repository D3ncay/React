import React from "react";
import MyButton from "../components/UI/button/MyButton";
import { useContext } from "react";
import { AuthContext } from "./../context/index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/posts");
    localStorage.setItem("auth", true);
  };
  return (
    <div>
      <form onSubmit={login}>
        <MyButton> Войти </MyButton>
      </form>
    </div>
  );
};

export default Login;
