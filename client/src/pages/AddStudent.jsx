import { useState } from 'react'

const AddStudent = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: ' ',
    schoolName: ' ',
    studentClass: ' ',
    studentsPhoneNumber: ' ',
    guardiansName: ' ',
    guardiansPhoneNumber: '',
    guardiansRelation: ' ',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(handleChange())
  }

  return (
    <div className="addStudent lg:mt-20 md:mt-10">
      <form
        className="max-w-sm mx-auto "
        onSubmit={handleSubmit}
      >
        <div className="border border-gray-800 p-5">
          <div className="mb-2">
            <div className="grid gap-2  grid-cols-1 sm:grid-cols-12">
              <div className="relative z-0 w-full mb-2 group col-span-6">
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  id="name"
                  placeholder="Name"
                  // value=""
                  // onChange={handleChange}
                  className="pl-3 block py-3  w-full text-sm text-gray-900 bg-transparent  border rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-2 group col-span-6">
                <input
                  type="email"
                  name=""
                  id="name"
                  placeholder="Email"
                  // value=""
                  // onChange={handleChange}
                  className="pl-3 block py-3  w-full text-sm text-gray-900 bg-transparent  border rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-2 group  2xl:col-span-8 xl:col-span-8 lg:col-span-8 md:col-span-6 sm:col-span-6 ">
                <input
                  type="number"
                  name=""
                  id="name"
                  placeholder="Student's number"
                  // value=""
                  // onChange={handleChange}
                  className="pl-3 block py-3  w-full text-sm text-gray-900 bg-transparent  border rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-2 group 2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-6 ">
                <input
                  type="number"
                  name=""
                  id="age"
                  placeholder="Age"
                  // value=""
                  // onChange={handleChange}
                  className="pl-2 block py-3  w-full text-sm text-gray-900 bg-transparent  border rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-2 group col-span-12">
                <input
                  type="text"
                  name=""
                  id="name"
                  placeholder="School Name"
                  // value=""
                  // onChange={handleChange}
                  className="pl-3 block py-3  w-full text-sm text-gray-900 bg-transparent  border rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-2 group col-span-6">
                <input
                  type="text"
                  name=""
                  id="name"
                  placeholder="Guardians Name"
                  // value=""
                  // onChange={handleChange}
                  className="pl-3 block py-3  w-full text-sm text-gray-900 bg-transparent  border rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-2 group col-span-6">
                <input
                  type="number"
                  name=""
                  id="name"
                  placeholder="Guardian's Number "
                  // value=""
                  // onChange={handleChange}
                  className="pl-3 block py-3  w-full text-sm text-gray-900 bg-transparent  border rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-2 group col-span-6">
                <input
                  type="text"
                  name=""
                  id="name"
                  placeholder="Guardian's Relation "
                  // value=""
                  // onChange={handleChange}
                  className="pl-3 block py-3  w-full text-sm text-gray-900 bg-transparent  border rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  required
                />
              </div>
            </div>
          </div>

          <button
            className="px-4  border ml-32 border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddStudent
