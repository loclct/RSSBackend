import dotenv from "dotenv";
import { Octokit } from "@octokit/rest";

dotenv.config();
const octokit = new Octokit({
  // auth: process.env.GITHUB_TOKEN_CLASSIC,
  // auth: process.env.GITHUB_ORGNIZATION_TOKEN,
  auth: process.env.GITHUB_ORGNIZATION_CLASSIC_TOKEN,
});

export default octokit;
