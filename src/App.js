import "./styles/App.css";
import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/button/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [isModalActive, setIsModalActive] = useState(false);

const sortedAndSearchedPosts = usePosts(filter.sort, filter.query, posts);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setIsModalActive(true)}>
        Создать пост
      </MyButton>
      {isModalActive && (
        <MyModal closeModal={() => setIsModalActive(false)}>
          <PostForm create={createPost} closeModal={()=>setIsModalActive(false)}/>
        </MyModal>
      )}
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      />
    </div>
  );
}

export default App;
