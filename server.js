'use strict';
const express = require("express");
const fs = require("fs");
const app = express();
const HOST = "localhost";
const PORT = 88;
const session = require("cookie-session")
const uuid = require("uuid")
const cors = require("cors")


app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
)
app.use(express.static("wwwroot"))
app.use(session({secret:"abc", maxAge: 24*60*60*1000}))
app.use(require("./script.js"))
app.listen(PORT, () => console.log(`Server Running at port ${PORT}!`))