import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'
import { useCookies } from 'react-cookie'
import { useNavigate, redirect } from 'react-router-dom'

const Signin = () => {
  const [cookies, setCookie] = useCookies(['jwt'])
  const navigate = useNavigate()

  useEffect(() => {
    if (cookies.jwt) {
      navigate('/admindetails')
    }
  }, [cookies.jwt, navigate])

  const [formData, setFormData] = useState({
    adminName: '',
    adminPassword: '',
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axiosInstance.post('/users/admin/authenticate', formData)
    } catch (error) {
      console.error('Error: ', error)
      alert('wrong name or password!!')
    }
  }

  useEffect(() => {
    if (cookies.jwt) {
      navigate('/admindetails')
    }
  }, [cookies.jwt, navigate])

  // console.log(cookies.jwt)

  return (
    <div className="registerForm m-10 ">
      <h1 className="max-w-sm mx-auto text-4xl mb-5 ">Admin Sign in</h1>
      <form
        className="max-w-sm mx-auto "
        onSubmit={handleSubmit}
      >
        <div className="border border-gray-800 p-10">
          <div className="mb-5">
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="text"
                name="adminName"
                id="name"
                value={formData.adminName}
                onChange={handleChange}
                className="pl-3 block py-3 w-full text-sm text-gray-900 bg-transparent  border rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                placeholder=" "
                required
              />
              <label className="pl-3 peer-focus:font-medium peer-focus:pl-0 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-400 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 focus:outline-none focus:ring">
                Name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="adminPassword"
              id="password"
              value={formData.adminPassword}
              onChange={handleChange}
              className="pl-3 block py-3 w-full text-sm text-gray-900 bg-transparent  border rounded border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
              placeholder=" "
              required
            />
            <label className="pl-3 peer-focus:font-medium peer-focus:pl-0 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-400 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 focus:outline-none focus:ring">
              Password
            </label>
          </div>
          <button
            className="px-4 py-2 border border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signin
