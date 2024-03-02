import { Link } from "react-router-dom";

const AdminDetails = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-md rounded-lg p-10 w-full md:w-1/2">
        <div className="grid grid-cols-1 gap-2">
          <p className="text-gray-700 text-2xl">Name: Salith</p>
          <p className="text-gray-700 text-2xl">Id: 65d74aec75d9601b344f4265</p>
          <p className="text-gray-700 text-2xl">Account Creation Date: 12/2/24</p>
        </div>
        <div className="mt-4 flex">
          <Link
            className="px-2 py-2 border border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300 mr-2"
            to={"/studentDetails"}
          >
            Edit Account
          </Link>
          <Link
            className="px-2 py-2 border border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300 ml-2"
            to={"/students"}
          >
            Student Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AdminDetails;
