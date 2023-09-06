import Loader from "../components/Loader";
import getTags from "../api/getTags";
import ErrorMessage from "../components/ErrorMessage";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Folder, Tag as TagIcon } from "react-feather";
import { motion } from "framer-motion";

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
      className="post-container relative w-[700px] ml-[400px] bg-white dark:bg-eerie-black-950 rounded-2xl"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="h-[600px]">
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
            <div className="grid grid-cols-3 mx-4">
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
      </div>
    </motion.section>
  );
};

export default TagPage;
