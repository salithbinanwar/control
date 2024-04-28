import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import studentBg from '../pictures/teacher.png'
import { useCookies } from 'react-cookie'

const StudentDetails = () => {
  const [cookies] = useCookies(['jwt'])
  const navigate = useNavigate()
  useEffect(() => {
    if (cookies.jwt == null) {
      navigate('/')
    }
  }, [cookies.jwt, navigate])

  const [student, setStudent] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axiosInstance.get(`users/students/${id}`)
        if (res.data.isSuccess) {
          const studentData = res.data.data
          setStudent(studentData)
        } else {
          console.log('failed')
        }
      } catch (error) {
        console.log('error ', error)
      }
    }
    fetchStudent()
  }, [id])

  return (
    <div className="container mx-auto mt-10 p-5 shadow-lg rounded-lg bg-gray-100">
      {student && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border">
          <div className="flex items-center justify-center md:justify-center">
            <div
              className="w-32 h-32 bg-cover bg-center rounded-full border-4 border-white shadow-lg"
              style={{ backgroundImage: `url(${studentBg})` }}
            ></div>
          </div>

          <div className="border p-5">
            <h1 className="text-4xl font-bold mb-3">{student.studentName}</h1>
            <p className="text-2xl mb-2 ">
              Student ID: <span className="">#{student._id}</span>
            </p>
            <p className="text-2xl mb-2 ">
              Email: <span className="">{student.studentEmail}</span>
            </p>
            <p className="text-2xl mb-2 ">
              Phone: <span className="">{student.studentsPhoneNumber}</span>
            </p>
            <p className="text-2xl mb-2 ">
              Guardian: <span className="">{student.guardiansName}</span>
            </p>
            <p className="text-2xl mb-2">
              Relation: <span className="">{student.guardiansRelation}</span>
            </p>
            <p className="text-2xl">
              Type:{' '}
              <span className="bg-green-500 text-white px-2 py-1 rounded-md">
                Regular
              </span>
            </p>
            <div className="flex justify-end">
              <Link
                className="px-2 py-2 border border-gray-600 rounded-sm shadow-md text-gray-800 font-montserrat text-lg hover:bg-gray-800 hover:text-white transition duration-300"
                to={'/students'}
              >
                Back to List
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentDetails
