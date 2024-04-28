import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axios'
import { useCookies } from 'react-cookie'

const AdminDetails = () => {
  const [admin, setAdmin] = useState([])

  const [cookies] = useCookies(['jwt'])
  const navigate = useNavigate()
  useEffect(() => {
    if (cookies.jwt == null) {
      navigate('/')
    }
  }, [cookies.jwt, navigate])

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axiosInstance.get('/users/admin/details')
        if (res.data.isSuccess) {
          const filteredData = res.data.data.map((admin) => {
            const { _id, adminName, adminPassword } = admin
            return { _id, adminName, adminPassword }
          })
          setAdmin(filteredData)
        } else {
          console.log('failed')
        }
      } catch {
        console.log('caught error')
      }
    }
    fetchAdmin()
  }, [])

  // logout function
  const adminLogOut = async () => {
    try {
      const response = await axiosInstance.get('users/admin/logout')

      console.log(response.data)
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-md rounded-lg p-10 w-full md:w-1/2">
        {admin.map((admin) => (
          <div
            key={admin._id}
            className="grid grid-cols-1 gap-2 "
          >
            <p className="text-gray-700 text-2xl">Name: {admin.adminName}</p>
            <p className="text-gray-700 text-2xl">ID: {admin._id}</p>
            {/* <p className="text-gray-700 text-2xl ">
              Password:{' '}
              <span className="line-through text-wrap">
                {admin.adminPassword}
              </span>
            </p> */}

            <div className="mt-4 flex">
              <Link
                className="px-2 py-2 border border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300 mr-2"
                to={'/edit'}
                disabled
              >
                Edit Account
              </Link>
              <Link
                className="px-2 py-2 border border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300 ml-2"
                to={'/students'}
              >
                Student Dashboard
              </Link>
              <Link
                className="px-2 py-2 border border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-300 ml-2"
                to={'/'}
                onClick={() => adminLogOut()}
              >
                Logout
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDetails
