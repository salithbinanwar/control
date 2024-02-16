const Button = ({ label }) => {
  return (
    <button
      className={`px-4 py-2 border m-2 border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300`}
    >
      {label}
    </button>
  );
};

export default Button;
