import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/index";
import MyButton from "./UI/button/MyButton";

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
    navigate("login");
  };
  return (
    <div className="navbar">
      <ul>
        {isAuth && (
          <>
            <li>
               <NavLink to="posts"> Посты </NavLink>
            </li>
            <li>
              <NavLink to="about">О нас</NavLink>
            </li>
            <li>
              <MyButton onClick={logout}>Выход</MyButton>
            </li>
          </>
        )}
        <li>{!isAuth && <NavLink to="login">Вход</NavLink>}</li>
      </ul>
    </div>
  );
};

export default NavBar;
