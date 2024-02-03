import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
import {addStudent,deleteStudent,getAllStudent} from "../Controllers/userController.js";
import { adminRegister, adminAuthenticate, adminDetails, adminLogOut } from '../admin/adminController.js';

//! admin routes
router.route('/1337x.to/admin/register').post( adminRegister)
router.route('/1337x.to/admin/authenticate').post( adminAuthenticate)
router.route('/1337x.to/admin/details').get(protect, adminDetails)
router.route('/1337x.to/admin/logout').get(protect,  adminLogOut)

//? students route
router.route('/addstudent').post(protect, addStudent)
router.route('/getallstudent').get(protect, getAllStudent)
router.route('/deletestudent').delete(protect, deleteStudent)


export default router ;