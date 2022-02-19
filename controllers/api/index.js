const router = require("express").Router();
const userRoutes = require("./userRoutes");
const entryRoutes = require("./entryRoutes");
const categoryRoutes = require("./categoryRoutes");
const habitRoutes = require("./habitRoutes");

router.use("/user", userRoutes);
router.use("/entry", entryRoutes);
router.use("/category", categoryRoutes);
router.use("/habit", habitRoutes);

module.exports = router;
