import Loader from "../components/Loader";
import Post from "../components/Post";
import getPosts from "../api/getPosts";
import ErrorMessage from "../components/ErrorMessage";
import { Fragment, useEffect, useState } from "react";

const Home = () => {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts(setPosts, setLoading, setError);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }
  return (
    <section className="post-container relative w-[700px] ml-[400px]">
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts?.map((post) => {
          return (
            <Fragment key={post._id}>
              <Post
                id={post._id}
                author={post.author}
                title={post.title}
                content={post.content}
                timestamp={post.timestamp_formatted}
                tags={post.tags}
                comments={post.comments}
              />
            </Fragment>
          );
        })
      )}
    </section>
  );
};

export default Home;
