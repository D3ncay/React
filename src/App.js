import "./styles/App.css";
import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS1", body: "JS - язык программирования2" },
    { id: 2, title: "JS6", body: "JS - язык программирования1" },
    { id: 3, title: "JS121", body: "JS - язык программирования3" },
    { id: 4, title: "JS11", body: "JS - язык программирования5" },
    { id: 5, title: "JS0", body: "JS - язык программирования88" },
  ]);

  

  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [posts, filter.sort]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      {sortedAndSearchedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов"
        />
      ) : (
        <h1>Постов нет!</h1>
      )}
    </div>
  );
}

export default App;
