const express = require("express");
const { getcontacts } = require("../Controller/contactcontroller");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Contact route is working");
  });
  


module.exports = router