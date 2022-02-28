const router = require("express").Router();
const { Entry, Habit, User } = require("../models");
const withAuth = require("../utils/auth");

// Login verification
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
    logged_in: req.session.logged_in,
  });
});

router.get("/mental", (req, res) => {
  res.render("mental", {
    title: "Mental",
    categoryID: 2,
    logged_in: req.session.logged_in,
  });
});

router.get("/dietary", (req, res) => {
  res.render("dietary", {
    title: "Dietary",
    categoryID: 3,
    logged_in: req.session.logged_in,
  });
});

// PHYSICAL ROUTES

// Renders running entries by user
router.get("/physical/running", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 1,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Running",
      categoryID: 1,
      habitID: 1,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});
// Renders yoga entries by user
router.get("/physical/yoga", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 2,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Yoga",
      categoryID: 1,
      habitID: 2,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

// Renders weightlifting entries by user
router.get("/physical/weightLifting", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 3,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Weight Lifting",
      categoryID: 1,
      habitID: 3,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});
// Renders Other physical entries by user
router.get("/physical/other", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 4,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Other - Physical",
      categoryID: 1,
      habitID: 4,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});
// MENTAL ROUTES

// Renders meditation entries by user
router.get("/mental/meditation", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 5,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Meditation",
      categoryID: 2,
      habitID: 5,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});
// Renders journaling entries by user
router.get("/mental/journaling", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 6,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Journaling",
      categoryID: 2,
      habitID: 6,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});
// Renders rest entries by user
router.get("/mental/rest", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 7,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Rest",
      categoryID: 2,
      habitID: 7,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});
// Renders Other mental entries by user
router.get("/mental/other", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 8,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Other - Menal",
      categoryID: 2,
      habitID: 8,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});
// DIETARY ROUTES

// Renders water entries by user
router.get("/dietary/water", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 9,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Water",
      categoryID: 3,
      habitID: 9,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

// Renders fruit & veg entries by user
router.get("/dietary/fruit&veggie", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 10,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Fruits & Veggies",
      categoryID: 3,
      habitID: 10,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

// Renders protein entries by user
router.get("/dietary/protein", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 11,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Protein",
      categoryID: 3,
      habitID: 11,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});
// Renders Other dietary entries by user
router.get("/dietary/other", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
        habit_id: 12,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("habitPage", {
      entries,
      title: "Other - Dietary",
      categoryID: 3,
      habitID: 12,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

// MY HABIT DASHBOARD
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const entryDataByUser = await Entry.findAll({
      include: [
        { model: User, attributes: ["id"] },
        { model: Habit, attributes: ["habit_name"] },
      ],
      where: {
        user_id: req.session.user_id,
      },
    });

    const entries = entryDataByUser.map((entry) => entry.get({ plain: true }));

    res.render("dashboard", {
      entries,
      title: "My Habit Dashboard",
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

module.exports = router;
