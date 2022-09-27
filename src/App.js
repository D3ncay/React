import "./styles/App.css";
import React, { useState } from "react";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "JS - язык программирования" },
    { id: 2, title: "JS", body: "JS - язык программирования" },
    { id: 3, title: "JS", body: "JS - язык программирования" },
    { id: 4, title: "JS", body: "JS - язык программирования" },
    { id: 5, title: "JS", body: "JS - язык программирования" },
  ]);

  return (
    <div className="App">
        <PostList posts={posts} title='Список постов'/>
    </div>
  );
}

export default App;
