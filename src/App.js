import "./styles/App.css";
import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS1", body: "JS - язык программирования2" },
    { id: 2, title: "JS6", body: "JS - язык программирования1" },
    { id: 3, title: "JS121", body: "JS - язык программирования3" },
    { id: 4, title: "JS11", body: "JS - язык программирования5" },
    { id: 5, title: "JS0", body: "JS - язык программирования88" },
  ]);

  const [selectedSort, setSelectedSort] = useState('')

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

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts(posts.sort((a,b) => a[sort].localeCompare(b[sort])))
  } 


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <MySelect value={selectedSort} onChange={sortPosts} options={options} defaultValue='Сортировка'/>
      {
        posts.length ? <PostList remove={removePost} posts={posts} title="Список постов" /> : <h1>Постов нет!</h1>
      }
    </div>
  );
}

export default App;
