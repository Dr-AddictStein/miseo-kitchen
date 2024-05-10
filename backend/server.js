import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from './DB/db.js'
import task from './Models/TaskTab.js'
import component from "./Models/componentTab.js";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(bodyParser.json());

const router = Router();

app.post('/api/createTask', async (req, res) => {
  const data = req.body;

  try {

    const newTask = new task(data);

    await newTask.save();
    res.json({ message: "New Task saved successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error while Creating Task" });
  }
});


app.post('/api/createComponent', async (req, res) => {
  const data = req.body;

  try {

    const newComponent = new component(data);

    await newComponent.save();
    res.json({ message: "New Component saved successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error while Creating Task" });
  }
});

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
