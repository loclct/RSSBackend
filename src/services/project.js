import octokit from "../configs/octokit.js";

const getAllProjectFromARepo = async (req, res) => {
  const { owner, repo } = req.params;
  try {
    const response = await octokit.rest.projects.listForRepo({
      owner,
      repo,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProjectDetailById = async (req, res) => {
  const { project_id } = req.params;
  try {
    const response = await octokit.rest.projects.get({
      project_id,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewProject = async (req, res) => {
  const { owner, repo } = req.params;
  const { name, body } = req.body;

  try {
    const response = await octokit.rest.projects.createForRepo({
      owner,
      repo,
      name,
      body,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProjectById = async (req, res) => {
  const { project_id } = req.params;
  const { name, body, state } = req.body;

  try {
    const response = await octokit.rest.projects.update({
      project_id,
      name,
      body,
      state,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProjectById = async (req, res) => {
  const { project_id } = req.params;
  try {
    await octokit.rest.projects.delete({
      project_id,
    });
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getAllProjectFromARepo,
  getProjectDetailById,
  createNewProject,
  updateProjectById,
  deleteProjectById,
};
