"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/auth"),
  login = _require.login,
  register = _require.register;
router.post("/register", register);
router.post("/login", login);
module.exports = router;