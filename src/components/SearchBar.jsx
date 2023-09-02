import { Search } from "react-feather";

const Searchbar = ({ setSearchTerm, handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="nav-wrap m-auto text-center bg-wild-sand-50 dark:bg-mine-shaft-950 border-t border-solid border-t-alto-200 p-4">
      <form
        className="find bg-inherit w-full mt-1 flex justify-between items-center"
        name="searchForm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="searchTerm"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-tundora-700 dark:text-silver-400 font-karla text-base border-none outline-none bg-inherit m-0 p-0 cursor-auto text-start w-[calc(100%-3em)]"
        />
        <button type="submit" className="cursor-pointer mr-1 align-middle">
          <Search color="#9ba5cb" size={20} />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
