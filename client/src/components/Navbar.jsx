import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">Nest Academy</a>
        <button onClick={toggleMenu} className="block lg:hidden text-white focus:outline-none">

        </button>
        <ul className={`hidden lg:flex justify-end text-white ${isOpen ? 'block' : 'hidden'}`}>

          {/* <li className="ml-6">
            <a href="/">Sign in </a>
          </li>

          <li className="ml-6">
            <a href="/contact">Register</a>
          </li> */}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
