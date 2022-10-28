require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

const port = process.env.PORT || 5050;

app.use(express.json());

app.use("/api", indexRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
