const router = require("express").Router();
const {
  register,
  login,
  getUserInfo,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleWare");

router.post("/register", register);
router.post("/login", login);
router.post("/get-user-info", authMiddleware, getUserInfo);

module.exports = router;
