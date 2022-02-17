// TODO: ENTRY ROUTES

const router = require('express').Router();
const { Entry, Habit } = require('../../models');

// The `/api/entries` endpoint

router.get('/', async (req, res) => {
    //Find all categories
  try {
    const entryData = await Entry.findAll({
      fields: ['id'],
      // be sure to include its associated Habit
      include: [{ model: Habit }]
    });
    res.status(200).json(entryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get one category
router.get('/:id', async (req, res) => {
  // Find one category by its `id` value
  try {
    const entryData = await Entry.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Habit }]
    });
    if (!entryData) {
      res.status(404).json({message: "No category with this id."});
      return;
    }
    res.status(200).json(entryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a new category
router.post('/', async (req, res) => {
  try {
    const newEntry = await Entry.create(req.body);
    res.status(200).json(newEntry);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Update category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {id: req.params.id,}
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const entryData = await Entry.destroy({
      where: { id: req.params.id }
    });
    if (!entryData) {
      res.status(404).json({message: 'Entry with this ID not found.' 
    });
      return;
    }
    res.status(200).json(entryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
