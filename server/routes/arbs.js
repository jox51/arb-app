const express = require("express")
const router = express.Router()

const { createArb } = require("../controllers/arbs")

router.route("/create").get(createArb)
// router.route("/static").get(getAllProductsStatic)

module.exports = router
