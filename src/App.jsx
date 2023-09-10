import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route, useLocation } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import Layout from "./pages/Layout";
import PostsWithinATag from "./pages/PostsWithinATag";
import { AnimatePresence } from "framer-motion";
import FilteredPosts from "./pages/FilteredPosts";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/page/:currentPage" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/posts/:post_id" element={<PostDetail />} />
            <Route path="/search" element={<FilteredPosts />} />
            <Route path="/tags" element={<TagPage />} />
            <Route path="/tag/:tag_id" element={<PostsWithinATag />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
