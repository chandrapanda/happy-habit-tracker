// CATEGORY ROUTES

const router = require("express").Router();
const { Category, Habit } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  //Find all categories
  try {
    const categoryData = await Category.findAll({
      fields: ["id"],
      // be sure to include its associated Products
      include: [{ model: Habit }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get one category
router.get("/:id", async (req, res) => {
  // Find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Habit }],
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category with this id." });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
