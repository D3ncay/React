import React from "react";
import { PostItem } from './PostItem';

const PostList = ({posts, title, remove}) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} number={1+index} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
