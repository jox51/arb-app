"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/arbs"),
  createArb = _require.createArb;
router.route("/create").get(createArb);
// router.route("/static").get(getAllProductsStatic)

module.exports = router;