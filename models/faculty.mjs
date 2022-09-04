import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The Name field is required"],
  },
  departments: 
});

const Faculty = mongoose.model("Faculty", facultySchema);

export default Faculty;
