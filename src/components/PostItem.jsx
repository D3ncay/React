import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from './UI/button/MyButton';

export const PostItem = ({post: {id, body, title}, number, remove}) => {

  const navigate = useNavigate();
  
  return (
    <div className="post">
      <div className="post__container">
        <strong>{number}. {title}</strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`${id}`)}>Открыть</MyButton>
        <MyButton onClick={() => remove(id)}>Удалить</MyButton>
      </div>
    </div>
  );
};

