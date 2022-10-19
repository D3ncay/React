import React from "react";
import { Route } from "react-router-dom";
import Posts from "./../pages/Posts";
import About from "./../pages/About";
import Error from "./../pages/Error";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import PostIdPage from "./../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Posts />} path="posts"/>
      <Route element={<PostIdPage />} path="posts/:postId" />
      <Route element={<About />} path="about" />
      <Route element={<Error />} path="not-found" />
      <Route path="*" element={<Navigate to="not-found" replace />} />
    </Routes>
  );
};

export default AppRouter;
