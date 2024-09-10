import { Router } from "express";
import {
  createNewRepo,
  deleteRepo,
  getAllRepo,
  getRepoByName,
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
import { getAllCollaboratorFromRepo } from "../services/collaborator.js";
import {
  createMilestone,
  deleteMilestone,
  getAllMilestoneInARepo,
  getAMilestoneById,
  updateMilestone,
} from "../services/milestone.js";

const routes = Router();

// REPO
routes.get("/repos", getAllRepo);
routes.get("/repos/:owner/:repo", getRepoByName);
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

// COLLABORATOR
routes.get("/repos/:owner/:repo/collaborator", getAllCollaboratorFromRepo);

// LABLE

// MILESTONE
routes.get("/repos/:owner/:repo/milestones", getAllMilestoneInARepo);
routes.get(
  "/repos/:owner/:repo/milestones/:milestone_number",
  getAMilestoneById
);
routes.post("/repos/:owner/:repo/milestones", createMilestone);
routes.patch(
  "/repos/:owner/:repo/milestones/:milestone_number",
  updateMilestone
);
routes.delete(
  "/repos/:owner/:repo/milestones/:milestone_number",
  deleteMilestone
);
//

// SOMETHING ELSE

export default routes;
