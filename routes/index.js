var express = require("express");
const controller = require("../controllers/indexController.js");

var router = express.Router();

router.get("/", controller.home);
router.get("/:id", controller.getOneUser);

module.exports = router;