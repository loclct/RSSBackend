import octokit from "../configs/octokit.js";

// {
//     "name": "bug",
//     "color": "f29513",
//     "description": "Something isn't working"
//   }
export const createNewLable = async (req, res) => {
  const { owner, repo } = req.params;
  const { name, color, description } = req.body;

  try {
    const response = await octokit.rest.issues.createLabel({
      owner,
      repo,
      name,
      color,
      description,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// {
//     "new_name": "enhancement",
//     "color": "a2eeef",
//     "description": "New feature or request"
// }
export const updateLable = async (req, res) => {
  const { owner, repo, name } = req.params;
  const { new_name, color, description } = req.body;

  try {
    const response = await octokit.rest.issues.updateLabel({
      owner,
      repo,
      name, // Current label name
      new_name, // New label name (optional)
      color, // New label color (optional)
      description, // New label description (optional)
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLable = async (req, res) => {
  const { owner, repo, name } = req.params;

  try {
    await octokit.rest.issues.deleteLabel({
      owner,
      repo,
      name, // Label name to delete
    });
    res.json({ message: `Label '${name}' deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllLablesInARepo = async (req, res) => {
  const { owner, repo } = req.params;

  try {
    const response = await octokit.rest.issues.listLabelsForRepo({
      owner,
      repo,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
