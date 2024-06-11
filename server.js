'use strict';
const express = require("express");
const fs = require("fs");
const app = express();
const HOST = "localhost";
const PORT = 5000;
// const session = require("cookie-session")
const uuid = require("uuid")
// const cors = require("cors");


app.use(express.static("wwwroot"))
app.listen(PORT, () => console.log(`Server Running at port ${PORT}!`))