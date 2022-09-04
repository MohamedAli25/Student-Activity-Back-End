import AcademicYear from "../models/academicYear.mjs";
import { BAD_REQUEST } from "../utils/httpStatusCodes.mjs";

export default class AcademicYearController {
  static async showAll(req, res) {
    const academicYears = await AcademicYear.find();
    return res.json({
      academicYears,
    });
  }

  static async store(req, res, next) {
    const name = req.body.name;
    const academicYear = new AcademicYear({
      name,
    });
    try {
      await academicYear.save();
      res.json({
        name: academicYear.name,
        id: academicYear._id,
      });
    } catch (errors) {
      console.log(errors);
      res.status(BAD_REQUEST).json(errors);
    }
  }

  static async show(req, res) {
    const academicYearId = req.params.academicYearId;
    try {
      const academicYear = await AcademicYear.findById(academicYearId);
      return res.json({
        name: academicYear.name,
        id: academicYear._id,
      });
    } catch (errors) {
      console.log(errors);
      res.status(BAD_REQUEST).json(errors);
    }
  }

  static async update(req, res) {
    const academicYearId = req.params.academicYearId;
    try {
      const academicYear = await AcademicYear.findById(academicYearId);
      academicYear.name = req.body.name || academicYear.name;
      await academicYear.save();
      return res.json({
        name: academicYear.name,
        id: academicYear._id,
      });
    } catch (errors) {
      console.log(errors);
      res.status(BAD_REQUEST).json(errors);
    }
  }

  static async destroy(req, res) {
    const academicYearId = req.params.academicYearId;
    try {
      const academicYear = await AcademicYear.findById(academicYearId);
      await academicYear.remove();
      return res.json();
    } catch (errors) {
      console.log(errors);
      res.status(BAD_REQUEST).json(errors);
    }
  }
}
