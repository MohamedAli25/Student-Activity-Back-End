import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The Name field is required"],
  },
});

const Department = mongoose.model("Department", departmentSchema);

export default Department;
