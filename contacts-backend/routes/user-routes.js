const express = require("express");
const { registerUser,loginUser,currentUser } = require("../controller/user-controller");
const router = express.Router();
const validateToken = require("../middleware/validate-token");

router.post("/register", registerUser);


router.post("/login", loginUser);
 
router.get("/current",validateToken, currentUser);


 module.exports = router;