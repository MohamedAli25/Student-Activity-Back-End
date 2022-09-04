import mongoose from "mongoose";

const academicYearSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The Name field is required"],
  },
});

const AcademicYear = mongoose.model("AcademicYear", academicYearSchema);

export default AcademicYear;
