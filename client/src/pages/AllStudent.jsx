import { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axios'
import { useCookies } from 'react-cookie'

const AllStudent = () => {
  const [students, setStudents] = useState([])
  const [cookies] = useCookies(['jwt'])
  const navigate = useNavigate()
  useEffect(() => {
    if (cookies.jwt == null) {
      navigate('/')
    }
  }, [cookies.jwt, navigate])
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axiosInstance.get('/users/students')
        if (res.data.isSuccess) {
          const filteredStudents = res.data.data.map((student) => {
            const {
              _id,
              studentName,
              schoolName,
              studentClass,
              studentsPhoneNumber,
              guardiansName,
              guardiansPhoneNumber,
              guardiansRelation,
              createdAt,
            } = student
            return {
              _id,
              studentName,
              schoolName,
              studentClass,
              studentsPhoneNumber,
              guardiansName,
              guardiansPhoneNumber,
              guardiansRelation,
              createdAt,
            }
          })
          setStudents(filteredStudents)
        } else {
          console.error('Error fetching students:', res.data.error)
        }
      } catch (error) {
        console.error('Error fetching students:', error)
      }
    }

    fetchStudents()
  }, [])

  return (
    <div className="flex justify-center">
      <table className="table w-full mx-52 my-12 rounded border border-collapse">
        <thead>
          <tr className="text-left bg-gray-500 text-white">
            <th className="px-6 py-3">join Date</th>
            <th className="px-6 py-3">Student Name</th>
            <th className="px-6 py-3">School Name</th>
            <th className="px-6 py-3">Class</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student._id}
              className="hover:bg-gray-100 border rounded"
            >
              <td className="px-6 py-4 font-thin border">
                {student.createdAt}
              </td>
              <td className="px-6 py-4 font-thin text-2xl">
                {student.studentName}
              </td>
              <td className="px-6 py-4 border">{student.schoolName}</td>
              <td className="px-6 py-4 border">{student.studentClass}</td>
              <td className="px-6 py-4 border text-center">
                <Link
                  className="px-2 py-2 border border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300"
                  to={`/studentDetails/${student._id}`}
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllStudent
