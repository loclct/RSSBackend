import { Router } from "express";
import {
  createNewRepo,
  deleteRepo,
  getAllRepo,
  updateRepo,
} from "../services/repo.js";
import {
  createNewIssuse,
  deleteIssuse,
  getAllIssusesFromRepo,
  updateIssuse,
} from "../services/issuse.js";
import {
  createNewProject,
  deleteProjectById,
  getAllProjectFromARepo,
  getProjectDetailById,
  updateProjectById,
} from "../services/project.js";

const routes = Router();

// REPO
routes.get("/repos", getAllRepo);
routes.post("/repos", createNewRepo);
routes.patch("/repos/:owner/:repo", updateRepo);
routes.delete("/repos/:owner/:repo", deleteRepo);

// ISSUSE
routes.get("/repos/:owner/:repo/issues", getAllIssusesFromRepo);
routes.post("/repos/:owner/:repo/issues", createNewIssuse);
routes.patch("/repos/:owner/:repo/issues/:issue_number", updateIssuse);
routes.delete("/repos/:owner/:repo/issues/:issue_number", deleteIssuse);

// PROJECT
routes.get("/repos/:owner/:repo/projects", getAllProjectFromARepo);
routes.post("/repos/:owner/:repo/projects", createNewProject);
routes.get("/projects/:id", getProjectDetailById);
routes.patch("/projects/:id", updateProjectById);
routes.delete("/projects/:id", deleteProjectById);

// LABLE

// MILESTONE

//

// SOMETHING ELSE

export default routes;
