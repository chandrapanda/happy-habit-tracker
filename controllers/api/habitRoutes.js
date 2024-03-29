// HABIT ROUTES

const router = require("express").Router();
const { Habit, Category } = require("../../models");

// The `/api/habit` endpoint

router.get("/", async (req, res) => {
  //Find all habits
  try {
    const habitData = await Habit.findAll({
      fields: ["id"],
      // be sure to include its associated Category
      include: [{ model: Category }],
    });
    res.status(200).json(habitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get one habit
router.get("/:id", async (req, res) => {
  // Find one habit by its `id` value
  try {
    const habitData = await Habit.findByPk(req.params.id, {
      // be sure to include its associated Category
      include: [{ model: Category }],
    });
    if (!habitData) {
      res.status(404).json({ message: "No habit with this id." });
      return;
    }
    res.status(200).json(habitData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
