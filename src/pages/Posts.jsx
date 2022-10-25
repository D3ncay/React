import React, { useEffect, useRef, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostService from "./../API/PostService";
import PostForm from "./../components/PostForm";
import PostList from "./../components/PostList";
import MyButton from "./../components/UI/button/MyButton";
import MyModal from "./../components/UI/button/MyModal/MyModal";
import { useFetching } from "./../hooks/useFetching";
import { usePagination } from "./../hooks/usePagination";
import { getPagesCount } from "./../utils/pages";
import Pagination from "./../components/Pagination";
import PostFilter from "./../components/PostFilter";
import { Outlet } from "react-router-dom";
import { useObserver } from "./../hooks/useObserving";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [isModalActive, setIsModalActive] = useState(false);

  const [totalPages, setTotalPages] = useState(0);

  const [limit, setLimit] = useState(10);

  const [page, setPage] = useState(1);

  const pagesArray = usePagination(totalPages);

  const sortedAndSearchedPosts = usePosts(filter.sort, filter.query, posts);

  const lastElement = useRef();

  const [fetchPosts, postsError, isPostsLoading] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton onClick={() => setIsModalActive(true)}>Создать пост</MyButton>
      {isModalActive && (
        <MyModal closeModal={() => setIsModalActive(false)}>
          <PostForm
            create={createPost}
            closeModal={() => setIsModalActive(false)}
          />
        </MyModal>
      )}
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading && <h1> Загрузка...</h1>}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      />
      <div
        ref={lastElement}
        style={{ height: "20px", background: "red" }}
      ></div>
      <Pagination
        pagesArray={pagesArray}
        changePage={changePage}
        currentPage={page}
      />
    </div>
  );
};

export default Posts;
