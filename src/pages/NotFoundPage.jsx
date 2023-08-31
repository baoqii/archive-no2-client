import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="relative w-[700px] ml-[400px] mt-20">
      <div className=" mx-auto">
        <h1 className="px-6 pt-4 text-9xl mb-24 mx-0 font-lato text-mine-shaft-950 tracking-wider leading-5 font-bold not-italic">
          404
        </h1>
        <h2 className="mb-8 px-6 text-4xl mx-0 font-lato text-mine-shaft-950 tracking-wide leading-5 font-semibold not-italic">
          UH OH! You&#39;re lost.
        </h2>
        <p className="mb-6 px-6 mx-0 text-tundora-700">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <Link to="/">
          <button className="uppercase px-6 mx-4 py-2 text-tundora-700 border-rock-blue-500 border-2 active:bg-rock-blue-500 active:text-white rounded-md transition-all duration-300 ease-in cursor-pointer hover:text-white hover:bg-rock-blue-500">
            Return Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
