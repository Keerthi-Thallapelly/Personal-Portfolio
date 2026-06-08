const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const projects = [
  {
    title: "AI Resume Screening System",
    description: "AI-based resume analyzer using NLP",
    github: "https://github.com/keerthi/resume-screening"
  },
  {
    title: "Coffee Rating Application",
    description: "Users can vote and rate coffee products",
    github: "https://github.com/keerthi/coffee-rating"
  },
  {
    title: "Personal Portfolio Website",
    description: "Full-stack portfolio website",
    github: "https://github.com/keerthi/portfolio"
  }
];

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});