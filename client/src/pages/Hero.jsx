import { Link } from "react-router-dom";
// import { Button } from "../components";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-solid border-4 p-10 text-center">
        <h1 className="text-4xl font-thin">Welcome to Nest Academy</h1>
        <p className="text-sm w-80 font-sans mx-auto my-3">Sign in to your existing account or create a new one for full access.</p>
        <div className="mt-4 flex flex-row justify-center">

          <Link className="px-4 py-2 border m-2 border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300" to={'/adminsignup'}> Sign in</Link>
          <Link className="px-4 py-2 border m-2 border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300" to={'/adminregister'}> Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
