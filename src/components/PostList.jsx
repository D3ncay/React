import React from "react";
import { PostItem } from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1>Постов нет!</h1>;
  }
  return (
    <>
      <div>
        <h1>{title}</h1>
        {posts.map((post, index) => (
          <PostItem
            remove={remove}
            number={post.id}
            post={post}
            key={post.id}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
