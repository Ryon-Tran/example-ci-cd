const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware để parse JSON
app.use(express.json());

// Endpoint cơ bản
app.get("/", (req, res) => {
  res.send("Hello, World! This is a simple Node.js Express app.");
});

// Endpoint health check (cho healthcheck trong Docker Compose)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});
app.use("/", require("./routes/index"));
// Kết nối database nếu cần (ví dụ: sử dụng biến môi trường)
// const dbUrl = process.env.DATABASE_URL;
// // Code kết nối DB ở đây, ví dụ với MongoDB hoặc PostgreSQL

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
