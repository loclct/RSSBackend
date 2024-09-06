import octokit from "../configs/octokit.js";

export const getAllIssusesFromRepo = async (req, res) => {
  const { owner, repo } = req.params;
  try {
    const respose = await octokit.rest.issues.listForRepo({
      owner,
      repo,
    });
    res.status(200).json(respose.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewIssuse = async (req, res) => {
  const { owner, repo } = req.params;
  const { title, body } = req.body;
  try {
    const response = await octokit.rest.issues.create({
      owner,
      repo,
      title,
      body,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteIssuse = async (req, res) => {
  const { owner, repo, issue_number } = req.params;
  try {
    await octokit.rest.issues.delete({
      owner,
      repo,
      issue_number,
    });
    res.json({ message: "Issue deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateIssuse = async (req, res) => {
  const { owner, repo, issue_number } = req.params;
  const updates = req.body;
  try {
    const response = await octokit.rest.issues.update({
      owner,
      repo,
      issue_number,
      ...updates,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
