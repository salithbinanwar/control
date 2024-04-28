import asyncHandler from 'express-async-handler'
import Student from '../models/userModel.js'

//* @desc Student details
//? @route POST /api/users/addstudents
//! @access Private

const addStudent = asyncHandler(async (req, res) => {
  const {
    studentName,
    studentEmail,
    schoolName,
    studentClass,
    studentsPhoneNumber,
    guardiansName,
    guardiansPhoneNumber,
    guardiansRelation,
  } = req.body

  // console.log(studentName, schoolName,studentClass,studentsPhoneNumber,guardiansName,guardiansPhoneNumber,guardiansRelation);
  const studentIdExists = await Student.findOne({ studentsPhoneNumber })

  // console.log(studentIdExists)

  if (studentIdExists) {
    res.status(400)
    throw new Error(`student Email or  phone number already exists  !!`)
  }

  const student = await Student.create({
    studentName,
    studentEmail,
    schoolName,
    studentClass,
    studentsPhoneNumber,
    guardiansName,
    guardiansPhoneNumber,
    guardiansRelation,
  })

  if (student) {
    res.status(200).json({
      isSuccess: true,
      _id: student.id,
      studentName: student.studentName,
      studentClass: student.studentClass,
      error: null,
    })
  } else {
    res.status(400)
    throw new Error('student data is invalid')
  }
})

//* @desc Student details
//? @route POST /api/users/students
//! @access private

const getAllStudent = asyncHandler(async (req, res) => {
  res.status(200).json({
    isSuccess: true,
    data: await Student.find(),
    error: null,
  })
})

//* @desc get a single students information by id
//? @route POST /api/users/students/:id
//! @access private
const getOneStudent = asyncHandler(async (req, res) => {
  const user = await Student.findById(req.params.id)
  if (user) {
    res.status(200).json({
      isSuccess: true,
      data: user,
      error: null,
    })
  } else {
    res.status(404).json({
      isSuccess: false,
      data: null,
      error: 'Student not found',
    })
  }
})

//* @desc update student data
//? @route DELETE /api/users/students/:id
//! @access private
const updateStudentData = async (req, res) => {
  const user = await Student.findById(req.params.id)
  if (user) {
    user.studentName = req.body.studentName || user.studentName
    user.studentClass = req.body.studentClass || user.studentClass
    user.schoolName = req.body.schoolName || user.schoolName

    // const { studentsPhoneNumber, studentEmail } = req.body
    // const userExists = await Student.findOne({
    //   studentEmail,
    //   studentsPhoneNumber,
    // })
    // if (userExists) {
    //   res.status(200)
    //   throw new Error(`this gmail cannot be added`)
    // }

    user.studentsPhoneNumber =
      req.body.studentsPhoneNumber || user.studentsPhoneNumber
    user.studentEmail = req.body.studentEmail || user.studentEmail

    user.guardiansName = req.body.guardiansName || user.guardiansName
    user.guardiansPhoneNumber =
      req.body.guardiansPhoneNumber || user.guardiansPhoneNumber
    user.guardiansRelation =
      req.body.guardiansRelation || user.guardiansRelation

    const updatedUser = await user.save()

    res.json(updatedUser)
  }
}

//* @desc deleting a student
//? @route DELETE /api/users/students
//! @access private
const deleteStudent = asyncHandler(async (req, res) => {
  const { studentsPhoneNumber } = req.body
  console.log(studentsPhoneNumber)

  const studentIdExists = await Student.findOne({ studentsPhoneNumber })
  //   console.log(studentIdExists)

  if (studentIdExists) {
    // console.log('student will be deleted soon')
    await Student.deleteOne({ studentsPhoneNumber })
  }
  res.json({
    isSuccess: true,
    message: 'student deleted successfully',
  })
})

export {
  addStudent,
  getAllStudent,
  getOneStudent,
  updateStudentData,
  deleteStudent,
}
