const router = require("express").Router();
const {
  addReport,
  getAllAttempts,
  getAllAttemptsByUser,
} = require("../controllers/reportControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/addReport", authMiddleware, addReport);
router.post("/getAllAttempts", authMiddleware, getAllAttempts);
router.get("/getAllAttemptsByUser", authMiddleware, getAllAttemptsByUser);

module.exports = router;
