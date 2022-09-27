import React from "react";

export const PostItem = ({post: {id, body, title}}) => {

  
  return (
    <div className="post">
      <div className="post__container">
        <strong>{id}. {title}</strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};

