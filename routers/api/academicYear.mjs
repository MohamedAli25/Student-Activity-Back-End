import { Router } from "express";
import AcademicYearController from "../../controllers/academicYearController.mjs";

const academicYearRouter = Router();

// API Router Calls
academicYearRouter.get("/", AcademicYearController.showAll);
academicYearRouter.post("/", AcademicYearController.store);
academicYearRouter.get("/:academicYearId", AcademicYearController.show);
academicYearRouter.patch("/:academicYearId", AcademicYearController.update);
academicYearRouter.delete("/:academicYearId", AcademicYearController.destroy);

export default academicYearRouter;
