import { useState } from "react";
import { Link} from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to={"/"} className="text-white text-2xl font-bold">Nest Academy</Link>

        <button onClick={toggleMenu} className="block lg:hidden text-white focus:outline-none">

        </button>
        <ul className={`hidden lg:flex justify-end text-white ${isOpen ? 'block' : 'hidden'}`}>

          <li className="ml-6">
            <Link to={"/adminsignup"}>Sign in </Link>
          </li>

          <li className="ml-6">
            <Link to={"/adminregister"}>Register</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
