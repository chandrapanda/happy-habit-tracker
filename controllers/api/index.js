const router = require("express").Router();
const userRoutes = require("./userRoutes");
const entryRoutes = require("./entryRoutes");
const categoryRoutes = require("./categoryRoutes");
const habitRoutes = require("./habitRoutes");

router.use("/User", userRoutes);
router.use("/Entry", entryRoutes);
router.use("/Category", categoryRoutes);
router.use("/Habit", habitRoutes);

module.exports = router;
