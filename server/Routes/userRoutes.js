import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()
import {
  addStudent,
  deleteStudent,
  getAllStudent,
  getOneStudent,
  updateStudentData,
} from '../Controllers/userController.js'
import {
  adminRegister,
  adminAuthenticate,
  adminDetails,
  adminLogOut,
} from '../admin/adminController.js'

//! admin routes
router.route('/admin/register').post(adminRegister)
router.route('/admin/authenticate').post(adminAuthenticate)
router.route('/admin/details').get(protect, adminDetails)
router.route('/admin/logout').get(protect, adminLogOut)

//? students route by id
router
  .route('/students/:id')
  .put(protect, updateStudentData)
  .get(protect, getOneStudent)

//? students route
router
  .route('/students')
  .post(protect, addStudent)
  .get(protect, getAllStudent)

  .delete(protect, deleteStudent)

export default router
