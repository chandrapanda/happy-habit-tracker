const router = require("express").Router();
const { Category, Entry, Habit, User } = require("../models");
const withAuth = require("../utils/auth");

/*
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
*/
router.get("/", (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    title: "login",
  });
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup", {
    title: "signup",
  });
});

router.get("/physical", (req, res) => {
  res.render("physical", {
    title: "Physical",
    categoryID: 1,
    logged_in: req.session.logged_in
  });
});

router.get("/mental", (req, res) => {
  res.render("mental", {
    title: "Mental",
    categoryID: 2,
    logged_in: req.session.logged_in
  });
});

router.get("/dietary", (req, res) => {
  res.render("dietary", {
    title: "Dietary",
    categoryID: 3,
    logged_in: req.session.logged_in
  });
});

// PHYSICAL ROTUES START HERE
// Running route all entries by user
router.get("/physical/running", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 1
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Running",
      categoryID: 1,
      habitID: 1,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// Yoga route all entries by user
router.get("/physical/yoga", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 2
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Yoga",
      categoryID: 1,
      habitID: 2,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// Weightlifting route all entries by user
router.get("/physical/weightLifting", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 3
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Weight Lifting",
      categoryID: 1,
      habitID: 3,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// Other physical route all entries by user
router.get("/physical/other", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 4
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Other - Physical",
      categoryID: 1,
      habitID: 4,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// MENTAL ROUTES START HERE
// Meditation route all entries by user
router.get("/mental/meditation", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 5
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Meditation",
      categoryID: 2,
      habitID: 5,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// Journaling route all entries by user
router.get("/mental/journaling", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 6
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Journaling",
      categoryID: 2,
      habitID: 6,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// Rest route all entries by user
router.get("/mental/rest", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 7
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Rest",
      categoryID: 2,
      habitID: 7,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// Other mental route all entries by user
router.get("/mental/other", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 8
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Other - Menal",
      categoryID: 2,
      habitID: 8,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// DIETARY ROUTES START HERE
// Water route all entries by user
router.get("/dietary/water", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 9
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Water",
      categoryID: 3,
      habitID: 9,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// Fruit & Veg route all entries by user
router.get("/dietary/fruit&veggie", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 10
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Fruits & Veggies",
      categoryID: 3,
      habitID: 10,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// Protein route all entries by user
router.get("/dietary/protein", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 11
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Protein",
      categoryID: 3,
      habitID: 11,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});
// Other dietary route all entries by user
router.get("/dietary/other", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Habit, attributes: ['habit_name']}
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 12
      },
    });
  
    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Other - Dietary",
      categoryID: 3,
      habitID: 12,
      logged_in: req.session.logged_in
    }
    );
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    res.redirect('login');
  }
});

module.exports = router;
