import "./styles/App.css";
import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS1", body: "JS - язык программирования" },
    { id: 2, title: "JS6", body: "JS - язык программирования" },
    { id: 3, title: "JS121", body: "JS - язык программирования" },
    { id: 4, title: "JS11", body: "JS - язык программирования" },
    { id: 5, title: "JS0", body: "JS - язык программирования" },
  ]);

  const options = [
    {value: 'title', name: 'По названию'},
    {value: 'body', name: 'По описанию'},
  ]

  const createPost = (post) => {
    setPosts([...posts, post])
  }

  const removePost = (id) => {
    setPosts(posts.filter(item => item.id !== id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <MySelect options={options} defaultValue='Сортировать по'/>
      {
        posts.length ? <PostList remove={removePost} posts={posts} title="Список постов" /> : <h1>Постов нет!</h1>
      }
    </div>
  );
}

export default App;
