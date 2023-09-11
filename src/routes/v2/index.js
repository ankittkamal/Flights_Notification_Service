const express = require("express");

const router = express.Router();

router.get("/info", (req, res) => {
  return res.json({ msg: "coming from v2 api" });
});

module.exports = router;
