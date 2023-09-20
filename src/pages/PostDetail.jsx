import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import getPostDetail from "../api/getPostDetail";
import { useEffect, useState } from "react";
import CommentsSection from "../components/CommentsSection";
import parse from "html-react-parser";
import { decode } from "html-entities";
import { motion } from "framer-motion";
import IconImage from "../assets/images/IMG_3968.jpeg";
import { Variants } from "../util/AnimationVariables";

const PostDetail = () => {
  const { post_id } = useParams();

  const [error, setError] = useState(null);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostDetail(post_id, setPost, setError, setLoading);
  }, [post_id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <motion.section
      className="post-container relative w-[100dvw] md:w-[700px] ml-auto xl:ml-[400px]"
      initial="initial"
      animate="in"
      exit="out"
      variants={Variants}
    >
      {post ? (
        <motion.article
          className="posts relative shadow-sm overflow-hidden bg-white dark:bg-eerie-black-950 mt-0 mx-auto mb-[150px] rounded-2xl lg:w-[700px]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="top-info info align-flex border-b border-solid border-alto-200 dark:border-onyx-900 bg-wild-sand-50 dark:bg-mine-shaft-950 text-tundora-700 dark:text-silver-400 p-6 flex justify-start items-center">
            <div className="info-left align-middle flex justify-between items-center leading-6 flex-shrink-0 max-w-[calc(100%-6em-3em)] whitespace-nowrap overflow-hidden">
              <img
                src={IconImage}
                className="w-8 h-8 mr-3 bg-white dark:bg-eerie-black-950 p-0.5 border border-solid border-white dark:border-eerie-black-950 rounded-full align-middle max-w-full hover:border-rock-blue-500 dark:hover:border-rock-blue-200 hover:transition-all hover:duration-500"
              />
              <div className="top-details inline-block align-middle">
                <div className="title text-xl text-mine-shaft-950 dark:text-silver-400 tracking-wider font-lato font-bold italic">
                  {post?.author?.username}
                </div>
              </div>
            </div>
          </div>
          <div className="main-content p-4 bg-white dark:bg-eerie-black-950">
            <h1 className="post-title px-6 pt-4 pb-0 m-0 text-3xl font-lato text-mine-shaft-950 dark:text-silver-400 tracking-wider font-bold italic hover:text-rock-blue-500 dark:hover:rock-blue-200">
              {post?.title}
            </h1>
            <div className="content my-6 px-6">
              {parse(decode(post?.content))}
            </div>
          </div>

          <div className="info bottom-info border-t border-solid border-alto-200 dark:border-onyx-900 bg-wild-sand-50 dark:bg-mine-shaft-950 text-tundora-700 dark:text-silver-400 p-6">
            <div className="align-flex upper flex justify-start items-center text-sm uppercase tracking-widest font-karla">
              <span className="info-left">{post?.timestamp_formatted}</span>
            </div>
            <div className="tags bg-wild-sand-50 dark:bg-mine-shaft-950">
              {post?.tags.map((tag) => (
                <Link
                  to={`/tag/${tag._id}`}
                  key={tag._id}
                  className="text-tundora-700 dark:text-silver-400 font-karla text-sm hover:text-rock-blue-500 dark:hover:text-rock-blue-200 cursor-pointer after:inline-block after:w-1.5 after:h-1.5 after:bg-rock-blue-500 dark:after-bg-rock-blue-300 after:rounded-full after:mx-3 after:mb-0.5 after:align-middle last-of-type:after:hidden"
                >
                  # {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.article>
      ) : (
        <p className="p-6 text-mine-shaft-950 dark:text-silver-400 font-lato text-2xl tracking-wider leading-5 font-bold italic">
          No post available.
        </p>
      )}
      {post && <CommentsSection postId={post._id} />}
    </motion.section>
  );
};

export default PostDetail;
