import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import morgan from "morgan";
import cors from "cors";
import octokit from "./configs/octokit.js";
import swaggerDocs from "./middlewares/swagger.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/api", routes);
swaggerDocs(app);
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();

console.log("Hello, %s", login);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
