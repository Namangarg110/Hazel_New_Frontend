const express = require("express")
const route = express.Router()

const { studentDataGet } = require("../Controllers/StudentGetData")

route.get("/studentDataGet", studentDataGet)

module.exports = route;