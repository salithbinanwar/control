import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js'
import generateToken from '../utils/generateToken.js'

//* @desc adminRegister
//?@route POST /admin/register
//! @access private

const adminRegister = asyncHandler(async (req, res) => {
  const { adminName, adminPassword } = req.body

  // const adminExists = await Admin.findOne({ adminName })
  // console.log(adminSingularity)
  const adminSingularity = await Admin.countDocuments()

  if (adminSingularity == 1) {
    res.status(400)
    throw new Error(`there was an error trying to register`)
  }

  const admin = await Admin.create({ adminName, adminPassword })

  // if (admin) {
  //   generateToken(res, admin._id)
  //   res.status(200).json({
  //     isSuccess: true,
  //     adminName: admin.adminName,
  //   })
  // } else {
  //   res.status(400)
  //   throw new Error('data is invalid')
  // }

  if (admin) {
    const jwt = generateToken(res, admin._id)

    res.cookie('jwt', jwt, {
      //   httpOnly: true,
      sameSite: 'strict',
      path: '/',
      secure: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    })
    res.json({
      isSuccess: true,
      _id: admin._id,
      adminName: admin.adminName,
      jwt,
    })
  } else {
    res.status(404)
    throw new Error('admin registration failed')
  }
})

//* @desc get admin details
//?@route POST /admin/adminDetails
//! @access private

const adminDetails = asyncHandler(async (req, res) => {
  res.status(200).json({
    isSuccess: true,
    data: await Admin.find(),
    error: null,
  })
})

//* @desc adminAuthenticate
//?@route POST /admin/authenticate
//! @access private

const adminAuthenticate = asyncHandler(async (req, res) => {
  const { adminName, adminPassword } = req.body
  const admin = await Admin.findOne({ adminName })
  const isMatchPassword = await admin.matchPassword(adminPassword)

  if (admin && isMatchPassword) {
    const jwt = generateToken(res, admin._id)

    res.cookie('jwt', jwt, {
      //   httpOnly: true,
      sameSite: 'strict',
      path: '/',
      secure: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    })
    res.json({
      isSuccess: true,
      _id: admin._id,
      adminName: admin.adminName,
      jwt,
    })
  } else {
    res.status(404)
    throw new Error('invalid admin or password')
  }
})

//* @desc adminLogOut
//?@route GET /admin/logout
//! @access private
const adminLogOut = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({ message: 'admin logged out successfully' })
}

export { adminRegister, adminDetails, adminAuthenticate, adminLogOut }
