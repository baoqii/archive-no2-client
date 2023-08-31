const Comment = ({ author, text }) => {
  return (
    <div className="p-6 m-0 border-b border-solid border-alto-200">
      <span className="font-extrabold uppercase tracking-widest text-sm border-b-2 border-solid border-rock-blue-500/[.6] text-tundora-700 cursor-pointer transition-all duration-300 hover:text-rock-blue-500 hover:border-rock-blue-500">
        {author}:
      </span>
      <blockquote className="p-0 pl-5 border-l border-l-solid border-l-alto-200 ml-5 my-5 mr-0 uppercase tracking-widest text-sm">
        {text}
      </blockquote>
    </div>
  );
};

export default Comment;
