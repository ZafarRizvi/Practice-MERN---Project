import express from "express";
import todoRoute from "./routes/todo.route.js";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("Todo API is running...");
});

app.use(cors());

app.use(express.json());
app.use("/api/todo", todoRoute);

export default app;
