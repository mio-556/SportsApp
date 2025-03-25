import app from "./app.js";

// Specifying the port and listen
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
