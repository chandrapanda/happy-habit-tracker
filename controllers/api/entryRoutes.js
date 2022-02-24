// ENTRY ROUTES

const router = require("express").Router();
const { Entry, Habit, User } = require("../../models");

// The `/api/entry` endpoint

router.get("/admin-get-all", async (req, res) => {
  //Find all entries
  try {
    const entryData = await Entry.findAll({
      fields: ["id"],
      // be sure to include its associated Habit
      include: [{ model: Habit, User }],
    });
    res.status(200).json(entryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: View all entries by one user
router.get("/habits/", async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        {
          model: User,
          attributes: ['id']
        },
      ],
      where: {
        user_id: req.session.user_id,
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));
    // res.render('all-posts-admin', {
      //   // TODO: Which layout in handlebars is used to show the user all their entries???
      //   layout: 'dashboard', 
      //   posts,
      // });
      
    res.status(200).json(entryDataByUser);
  } catch (err) {
    res.status(500).json(err);
    // res.redirect('login');
  }
});

// View all entries by one user for one habit
router.get("/myhabit", async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      where: {
        user_id: 1,
        // req.session.userId,
        habit_id: 1,
        // req.body.habit_id
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));
    // res.render('myhabit', {
      //   // TODO: Which layout in handlebars is used to show the user all their entries for a particlar habit???
      //   layout: 'dashboard', 
      //   posts,
      // });
      
    res.status(200).json(entryDataByUser);
  } catch (err) {
    res.status(500).json(err);
    // res.redirect('login');
  }
});


//Get one entry
router.get("/:id", async (req, res) => {
  // Find one entries by its `id` value
  try {
    const entryData = await Entry.findByPk(req.params.id, {
      // be sure to include its associated Habits
      include: [{ model: Habit, User }],
    });
    if (!entryData) {
      res.status(404).json({ message: "No entry with this id." });
      return;
    }
    res.status(200).json(entryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a new entry
router.post("/", async (req, res) => {
  try {
    const newEntry = await Entry.create(req.body, {returning: true});
    res.status(200).json(newEntry);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Update entry by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const updatedEntry = await Entry.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updatedEntry) {
      res.status(404).json({ message: "No entry with this id." });
      return;
    }
    res.status(200).json(updatedEntry);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete an entry by its `id` value
  try {
    const entryData = await Entry.destroy({
      where: { id: req.params.id },
    });
    if (!entryData) {
      res.status(404).json({ message: "Entry with this ID not found." });
      return;
    }
    res.status(200).json(entryData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
