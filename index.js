const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.use(express.urlencoded({ extended: true }));


const adminRoutes = require("./routes/admin");
app.use("/admin", adminRoutes);


app.listen(port, "192.168.218.246", () => {
  console.log(`Server is running on port ${port}`);
});
