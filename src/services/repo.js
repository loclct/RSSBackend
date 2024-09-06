import octokit from "../configs/octokit.js";

const getAllRepo = async (req, res) => {
  try {
    const response = await octokit.rest.repos.listForAuthenticatedUser();
    if (!response) res.status(404).json({ messge: "Repos not found" });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewRepo = async (req, res) => {
  try {
    const { name, description, isPrivate } = req.body;
    const response = await octokit.rest.repos.createForAuthenticatedUser({
      name,
      description,
      isPrivate,
    });
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRepo = async (req, res) => {
  const { owner, repo } = req.params;
  const updates = req.body;
  try {
    const response = await octokit.rest.repos.update({
      owner,
      repo,
      ...updates,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRepo = async (req, res) => {
  const { owner, repo } = req.params;
  try {
    await octokit.rest.repos.delete({
      owner,
      repo,
    });
    res.status(200).json({ message: "Repository deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getAllRepo, createNewRepo, updateRepo, deleteRepo };
