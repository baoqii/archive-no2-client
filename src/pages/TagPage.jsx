import Loader from "../components/Loader";
import getTags from "../api/getTags";
import ErrorMessage from "../components/ErrorMessage";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Folder, Tag as TagIcon } from "react-feather";
import { motion } from "framer-motion";
import { Variants } from "../util/AnimationVariables";

const Tag = ({ tag_id, name }) => {
  return (
    <Link
      to={`/tag/${tag_id}`}
      className="hover:text-rock-blue-500 dark:hover:text-rock-blue-200 flex items-center space-x-4 my-3"
    >
      <TagIcon size={14}></TagIcon>
      <p>{name}</p>
    </Link>
  );
};

const TagPage = () => {
  const [error, setError] = useState(null);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTags(setTags, setLoading, setError);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <motion.section
      className="post-container relative  w-[100dvw] md:w-[700px] ml-auto xl:ml-[400px] bg-white dark:bg-eerie-black-950 rounded-2xl"
      initial="initial"
      animate="in"
      exit="out"
      variants={Variants}
    >
      <motion.div
        className="min-h-[600px]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {tags.length === 0 ? (
          <p className="p-6 text-mine-shaft-950 dark:text-silver-400 font-lato text-2xl tracking-wider leading-5 font-bold italic">
            No tags available.
          </p>
        ) : (
          <Fragment>
            <div className="flex gap-4 items-center mx-4 border-b border-b-alto-200 pt-5 py-3">
              <Folder size={20} className="ml-3"></Folder>
              <h2 className="font-lato font-semibold text-lg tracking-wide text-tundora-700 dark:text-silver-400 leading-5 not-italic">
                Tags
              </h2>
            </div>
            <div
              className="grid  mx-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]
"
            >
              {tags?.map((tag) => (
                <div
                  key={tag._id}
                  className="border-b border-b-alto-200 px-4 hover:bg-wild-sand-50 hover:dark:bg-mine-shaft-950"
                >
                  <Tag tag_id={tag._id} name={tag.name} />
                </div>
              ))}
            </div>
          </Fragment>
        )}
      </motion.div>
    </motion.section>
  );
};

export default TagPage;
