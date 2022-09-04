import { Router } from "express";
import DepartmentController from "../../controllers/departmentController.mjs";

const departmentRouter = Router();

// API Router Calls
departmentRouter.get("/", DepartmentController.showAll);
departmentRouter.post("/", DepartmentController.store);
departmentRouter.get("/:departmentId", DepartmentController.show);
departmentRouter.patch("/:departmentId", DepartmentController.update);
departmentRouter.delete("/:departmentId", DepartmentController.destroy);

export default departmentRouter;
