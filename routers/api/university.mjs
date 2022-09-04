import { Router } from "express";
import UniversityController from "../../controllers/universityController.mjs";

const universityRouter = Router();

universityRouter.get("/", UniversityController.index);
universityRouter.get("/create", UniversityController.create);
universityRouter.post("/", UniversityController.store);
universityRouter.get("/:universityId", UniversityController.show);
universityRouter.get("/:universityId/edit", UniversityController.edit);
universityRouter.patch("/:universityId", UniversityController.update);
universityRouter.delete("/:universityId", UniversityController.destroy);

export default universityRouter;
