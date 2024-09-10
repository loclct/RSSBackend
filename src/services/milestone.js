// {
//     "title": "v1.0",
//     "state": "open",
//     "description": "Version 1.0 milestone",
//     "due_on": "2024-12-31T23:59:59Z"

import octokit from "../configs/octokit.js";

export const createMilestone = async (req, res) => {
  const { owner, repo } = req.params;
  const { title, state, description, due_on } = req.body;

  try {
    const response = await octokit.rest.issues.createMilestone({
      owner,
      repo,
      title, // Milestone title
      state, // Either 'open' or 'closed' (optional)
      description, // Milestone description (optional)
      due_on, // ISO 8601 date (optional)
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//   {
//     "title": "v1.0 updated",
//     "state": "closed",
//     "description": "Final release of version 1.0",
//     "due_on": "2024-12-15T23:59:59Z"
//   }
export const updateMilestone = async (req, res) => {
  const { owner, repo, milestone_number } = req.params;
  const { title, state, description, due_on } = req.body;

  try {
    const response = await octokit.rest.issues.updateMilestone({
      owner,
      repo,
      milestone_number, // Milestone number
      title, // New title (optional)
      state, // Either 'open' or 'closed' (optional)
      description, // New description (optional)
      due_on, // New due date (optional)
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMilestone = async (req, res) => {
  const { owner, repo, milestone_number } = req.params;

  try {
    await octokit.rest.issues.deleteMilestone({
      owner,
      repo,
      milestone_number, // Milestone number to delete
    });
    res.json({
      message: `Milestone #${milestone_number} deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllMilestoneInARepo = async (req, res) => {
  const { owner, repo } = req.params;

  try {
    const response = await octokit.request(
      `GET /repos/${owner}/${repo}/milestones`,
      {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getAMilestoneById = async (req, res) => {
  const { owner, repo, milestone_number } = req.params;
  try {
    const response = await octokit.request(
      `GET /repos/${owner}/${repo}/milestones/${milestone_number}`,
      {
        owner: owner,
        repo: repo,
        milestone_number: milestone_number,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    if (response.status === 404) res.json({ message: "Resource not found" });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
