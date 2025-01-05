import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js TypeScript server!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
