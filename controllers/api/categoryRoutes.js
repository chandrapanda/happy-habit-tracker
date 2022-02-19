// CATEGORY ROUTES

const router = require("express").Router();
const { Category } = require("../../models");

// The `/api/category` endpoint

router.get("/", async (req, res) => {
  //Find all categories
  try {
    const categoryData = await Category.findAll({});
    res.status(200).json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//Get one category
router.get("/:id", async (req, res) => {
  // Find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {});
    if (!categoryData) {
      res.status(404).json({ message: "No category with this id." });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
