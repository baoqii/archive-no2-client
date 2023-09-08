import Loader from "../components/Loader";
import Post from "../components/Post";
import ErrorMessage from "../components/ErrorMessage";
import { Fragment } from "react";
import { motion } from "framer-motion";
import usePagination from "../hooks/usePagination";

const Home = () => {
  const { posts, loading, error } = usePagination();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <motion.section
      className="post-container relative w-[700px] ml-[400px]"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      {posts.length === 0 ? (
        <p className="p-6 text-mine-shaft-950 dark:text-silver-400 font-lato text-2xl tracking-wider leading-5 font-bold italic">
          No posts available.
        </p>
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
    </motion.section>
  );
};

export default Home;
