const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware for parsing JSON
app.use(express.json());

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// In-memory storage for video metadata
const videos = [];

// Endpoint to upload a video
app.post("/api/videos", upload.single("video"), (req, res) => {
  const { title, description, tags } = req.body;
  const video = {
    id: videos.length + 1,
    title,
    description,
    tags: tags ? tags.split(",") : [],
    filePath: `/uploads/${req.file.filename}`,
  };
  videos.push(video);
  res.status(201).json(video);
});

// Endpoint to fetch all videos
app.get("/api/videos", (req, res) => {
  res.json(videos);
});

// Endpoint to fetch a single video by ID
app.get("/api/videos/:id", (req, res) => {
  const video = videos.find((v) => v.id === parseInt(req.params.id));
  if (!video) {
    return res.status(404).json({ error: "Video not found" });
  }
  res.json(video);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
