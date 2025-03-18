// Import express
import express from "express";

// Import cors
import cors from "cors";

// Import routes
import Router from "./routes/routes.js";

// Initialize express
const app = express();

// Use express json
app.use(express.json());

// Use cors
app.use(cors());

// Use router
app.use(Router);

// Define PORT dynamically (use 5001 if process.env.PORT is not set)
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});
