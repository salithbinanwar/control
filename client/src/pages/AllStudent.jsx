import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllStudent = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/users/students',
        )
        if (response.data.isSuccess) {
          const filteredStudents = response.data.data.map((student) => {
            const {
              _id,
              studentName,
              schoolName,
              studentClass,
              studentsPhoneNumber,
              guardiansName,
              guardiansPhoneNumber,
              guardiansRelation,
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
            }
          })
          setStudents(filteredStudents)
        } else {
          console.error('Error fetching students:', response.data.error)
        }
      } catch (error) {
        console.error('Error fetching students:', error)
      }
    }

    fetchStudents()
  }, [])

  return (
    <div>
      <table className="table w-full overflow-hidden">
        <thead>
          <tr className="text-left bg-gray-500 text-white">
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
              className="border-b hover:bg-gray-100"
            >
              <td className="px-6 py-4 text-2xl">{student.studentName}</td>
              <td className="px-6 py-4 text-2xl">{student.schoolName}</td>
              <td className="px-6 py-4 text-2xl">{student.studentClass}</td>
              <td className="px-6 py-4">
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
