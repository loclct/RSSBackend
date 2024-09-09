import octokit from "../configs/octokit.js";

export const getAllCollaboratorFromRepo = async (req, res) => {
  const { owner, repo } = req.params;
  try {
    const respose = await octokit.request(
      `GET /repos/${owner}/${repo}/collaborators`,
      {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    res.status(200).json(respose.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const createNewCollaborator = async (req, res) => {
//   const { owner, repo } = req.params;
//   const { title, body } = req.body;
//   try {
//     const response = await octokit.rest.issues.create({
//       owner,
//       repo,
//       title,
//       body,
//     });
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteCollaborator = async (req, res) => {
//   const { owner, repo, issue_number } = req.params;
//   try {
//     await octokit.rest.issues.delete({
//       owner,
//       repo,
//       issue_number,
//     });
//     res.json({ message: "Issue deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const updateCollaborator = async (req, res) => {
//   const { owner, repo, issue_number } = req.params;
//   const updates = req.body;
//   try {
//     const response = await octokit.rest.issues.update({
//       owner,
//       repo,
//       issue_number,
//       ...updates,
//     });
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
