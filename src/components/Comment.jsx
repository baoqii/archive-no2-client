const Comment = ({ author, text }) => {
  return (
    <div className="p-6 m-0 border-b border-solid border-alto-200 dark:border-onyx-900">
      <span className="font-extrabold uppercase tracking-widest text-sm border-b-2 border-solid border-rock-blue-500/[.6] dark:border-rock-blue-400 text-tundora-700 dark:text-silver-400 cursor-pointer transition-all duration-300 hover:text-rock-blue-500 dark:hover:text-rock-blue-300 hover:border-rock-blue-500 dark:hover:border-rock-blue-300">
        {author}:
      </span>
      <blockquote className="p-0 pl-5 border-l border-l-solid border-l-alto-200 ml-5 my-5 mr-0 uppercase tracking-widest text-sm">
        {text}
      </blockquote>
    </div>
  );
};

export default Comment;
