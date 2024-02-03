import asyncHandler from "express-async-handler";
import Student from "../models/userModel.js"


//* @desc Student details 
//? @route POST /api/users/addstudents
//! @access PUBLIC 

const addStudent = asyncHandler(async (req , res)=>{

    const {studentName,
        
        schoolName,
        studentClass,
        studentsPhoneNumber,
        guardiansName,
        guardiansPhoneNumber,
        guardiansRelation} = req.body;

        console.log(studentName, schoolName,studentClass,studentsPhoneNumber,guardiansName,guardiansPhoneNumber,guardiansRelation);
        const studentIdExists = await Student.findOne({studentsPhoneNumber})

        console.log(studentIdExists)

    if(studentIdExists){

        res.status(400);
        throw new Error(`student name or  phone number already exists  !!`);
    }

    const student = await Student.create({
        studentName,
        schoolName,
        studentClass,
        studentsPhoneNumber,
        guardiansName,
        guardiansPhoneNumber,
        guardiansRelation})

        if(student){
            res.status(200).json({
                isSuccess: true,
                _id: student.id,
                studentName: student.studentName,
                studentClass: student.studentClass,
                error:null
            
            })
        }else{
            res.status(400);
            throw new Error("student data is invalid")
        }
});

//* @desc Student details 
//? @route POST /api/users/allstudents
//! @access PUBLIC

const getAllStudent = asyncHandler(async (req , res)=>{
    res.status(200).json({

        isSuccess:true,
        data:await Student.find(),
        error:null

    })
    
});

//* @desc deleting a student
//? @route DELETE /api/users/deletestudent
//! @access PUBLIC
const deleteStudent = asyncHandler(async (req , res)=>{
    
const studentsPhoneNumber = req.body;
console.log(studentsPhoneNumber)
const findStudent = await Student.findById({studentsPhoneNumber})
console.log(findStudent)
if (findStudent) {
    
await findStudent.deleteOne(studentsPhoneNumber);
}
    res.json({
        isSuccess:true,
        message:"student deleted successfully"
    });
});



export {addStudent, getAllStudent, deleteStudent}