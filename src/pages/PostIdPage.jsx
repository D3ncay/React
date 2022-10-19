import React from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "./../hooks/useFetching";
import PostService from "./../API/PostService";
import { useState } from "react";
import { useEffect } from "react";

const PostIdPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();

  const [fetchPostInfo, error, isLoading] = useFetching(async (id) => {
    const [postResponse, commentsResponse] = await Promise.all([PostService.getById(id), PostService.getСommentsByPostId(id)]);
    setPost(postResponse.data);
    setComments(commentsResponse.data);
  });
//   const [fetchComments, comError, isComLoading] = useFetching(async (id) => {
//     const response = await PostService.getСommentsByPostId(id);
//     setComments(response.data);
//   });
//   const [fetchPost, comError, isComLoading] = useFetching(async (id) => {
//     const response = await PostService.getById(id);
//     setComments(response.data);
//   });

  useEffect(() => {
    fetchPostInfo(params.postId);
  }, []);


  return (
    <div>
      {isLoading ? (
        <h1> Загрузка...</h1>
      ) : (
        <>
          <div className="post-container">
            <div className="post-title">
              {post.id}. {post.title}{" "}
            </div>
            <div className="post-body">{post.body}</div>
          </div>
          <h2 className="comments-title">Комментарии</h2>
          {comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="comment-user"> {comment.email} | {comment.name}</div>
              <div className="comment-body">{comment.body}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PostIdPage;
