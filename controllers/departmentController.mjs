import Department from "../models/department.mjs";
import { BAD_REQUEST } from "../utils/httpStatusCodes.mjs";

export default class DepartmentController {
  static async showAll(req, res) {
    const departments = await Department.find();
    return res.json({
      departments,
    });
  }

  static async store(req, res, next) {
    const name = req.body.name;
    const department = new Department({
      name,
    });
    try {
      await department.save();
      res.json({
        name: department.name,
        id: department._id,
      });
    } catch (errors) {
      console.log(errors);
      res.status(BAD_REQUEST).json(errors);
    }
  }

  static async show(req, res) {
    const departmentId = req.params.departmentId;
    try {
      const department = await Department.findById(departmentId);
      return res.json({
        name: department.name,
        id: department._id,
      });
    } catch (errors) {
      console.log(errors);
      res.status(BAD_REQUEST).json(errors);
    }
  }

  static async update(req, res) {
    const departmentId = req.params.departmentId;
    try {
      const department = await Department.findById(departmentId);
      department.name = req.body.name || department.name;
      await department.save();
      return res.json({
        name: department.name,
        id: department._id,
      });
    } catch (errors) {
      console.log(errors);
      res.status(BAD_REQUEST).json(errors);
    }
  }

  static async destroy(req, res) {
    const departmentId = req.params.departmentId;
    try {
      const department = await Department.findById(departmentId);
      await department.remove();
      return res.json();
    } catch (errors) {
      console.log(errors);
      res.status(BAD_REQUEST).json(errors);
    }
  }
}
