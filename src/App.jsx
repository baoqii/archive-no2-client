import "./App.css";
import ErrorPage from "./pages/ErrorPage";

import { Routes, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import Layout from "./pages/Layout";

// About , Newsletter, Tags page, no results found,

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/posts/:post_id" element={<PostDetail />} />
          <Route path="/tags" element={<TagPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
