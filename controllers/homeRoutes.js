const router = require("express").Router();
const { Category, Entry, Habit, User } = require("../models");
// const { User } = require("../models");
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
    categoryID: 1
  });
});

router.get("/mental", (req, res) => {
  res.render("mental", {
    title: "Mental",
    categoryID: 2
  });
});

router.get("/dietary", (req, res) => {
  res.render("dietary", {
    title: "Dietary",
    categoryID: 3
  });
});

// PHYSICAL ROTUES START HERE
router.get("/physical/running", async (req, res) => {
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
    }
    );
      
    // res.status(200).json(entries);
  } catch (err) {
    console.log(err)
    // res.status(500).json(err);
    // res.redirect('login');
  }
});
router.get("/physical/yoga", (req, res) => {
  res.render("habitPage", {
    title: "Yoga",
    categoryID: 1,
    habitID: 2,
  });
});
router.get("/physical/weightLifting", (req, res) => {
  res.render("habitPage", {
    title: "Weight Lifting",
    categoryID: 1,
    habitID: 3,
  });
});
router.get("/physical/other", (req, res) => {
  res.render("habitPage", {
    title: "Other",
    categoryID: 1,
    habitID: 4,
  });
});

// MENTAL ROUTES START HERE
router.get("/mental/meditation", (req, res) => {
  res.render("habitPage", {
    title: "Meditation",
    categoryID: 2,
    habitID: 5,
  });
});
router.get("/mental/journaling", (req, res) => {
  res.render("habitPage", {
    title: "Journaling ",
    categoryID: 2,
    habitID: 6,
  });
});
router.get("/mental/rest", (req, res) => {
  res.render("habitPage", {
    title: "Rest ",
    categoryID: 2,
    habitID: 7,
  });
});
router.get("/mental/other", (req, res) => {
  res.render("habitPage", {
    title: "Other ",
    categoryID: 2,
    habitID: 8,
  });
});

// DIETARY ROUTES START HERE
router.get("/dietary/water", (req, res) => {
  res.render("habitPage", {
    title: "Water ",
    categoryID: 3,
    habitID: 9,
  });
});
router.get("/dietary/fruit&veggie", (req, res) => {
  res.render("habitPage", {
    title: "Fruit & Veggie ",
    categoryID: 3,
    habitID: 10,
  });
});
router.get("/dietary/protiein", (req, res) => {
  res.render("habitPage", {
    title: "Protein ",
    categoryID: 3,
    habitID: 11,
  });
});
router.get("/dietary/other", (req, res) => {
  res.render("habitPage", {
    title: "Other ",
    categoryID: 3,
    habitID: 12
  });
});
module.exports = router;
