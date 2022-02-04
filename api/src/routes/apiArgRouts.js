const { Router } = require("express");
const router = Router();

const {
    getLocalion
} = require("../controllers/apiArgController.js");

router.get("/", getLocalion);

module.exports = router;
