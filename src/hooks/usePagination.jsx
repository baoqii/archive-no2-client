import { useState, useEffect } from "react";
import getPosts from "../api/getPosts";
import { useNavigate, useParams } from "react-router-dom";

function usePagination() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { currentPage } = useParams(); // Get currentPage from URL
  const currentPageNumber = parseInt(currentPage, 10) || 1; // Default to page 1 if not a valid number

  const postsPerPage = 10;

  useEffect(() => {
    getPosts(setPosts, setLoading, setError);
  }, [currentPage]);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  function decrement() {
    if (currentPageNumber > 1) {
      const prevPage = currentPageNumber - 1;
      navigate(`/page/${prevPage}`);
    }
  }

  function increment() {
    if (currentPageNumber < totalPages) {
      const nextPage = currentPageNumber + 1;
      navigate(`/page/${nextPage}`);
    }
  }

  const startIndex = (currentPageNumber - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, posts.length);
  const displayedPosts = posts.slice(startIndex, endIndex);

  return {
    currentPage: currentPageNumber,
    totalPages,
    posts: displayedPosts,
    loading,
    error,
    decrement,
    increment,
  };
}

export default usePagination;
