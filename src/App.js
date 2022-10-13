import "./styles/App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/button/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import { useFetching } from "./hooks/useFetching";
import { getPagesCount } from "./utils/pages";
import { usePagination } from "./hooks/usePagination";
import MyPage from "./components/UI/page/MyPage";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [isModalActive, setIsModalActive] = useState(false);

  const [totalPages, setTotalPages] = useState(0);

  const [limit, setLimit] = useState(10);

  const [page, setPage] = useState(1);

  const pagesArray = usePagination(totalPages);

  const sortedAndSearchedPosts = usePosts(filter.sort, filter.query, posts);

  const [fetchPosts, postsError, isPostsLoading] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

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
      {isPostsLoading ? (
        <h1> Загрузка...</h1>
      ) : (
        <>
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="Список постов"
          />
          <div className="pages">
            {pagesArray.map((p) => (
              <MyPage onClick={() => setPage(p)} key={p} page={p} currentPage={page} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
