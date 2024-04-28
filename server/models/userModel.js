import mongoose from 'mongoose'

const studentSchema = mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    studentEmail: {
      type: String,
      required: true,
      unique: [true, 'Email should be unique'],
    },

    schoolName: {
      type: String,
      required: true,
    },
    studentClass: {
      type: Number,
      required: true,
    },
    studentsPhoneNumber: {
      type: Number,
      required: true,
      unique: [true, 'Phone Number should be unique'],
    },
    guardiansName: {
      type: String,
      required: true,
    },
    guardiansPhoneNumber: {
      type: Number,
      required: true,
    },

    guardiansRelation: {
      type: String,
      required: true,
    },

    separationDate: {
      type: Date,
    },
  },

  { timestamps: true },
)

const Student = mongoose.model('Student', studentSchema)

export default Student
