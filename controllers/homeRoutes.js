const router = require("express").Router();
const { User } = require("../models");
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
  });
});

router.get("/mental", (req, res) => {
  res.render("mental", {
    title: "Mental",
  });
});

router.get("/dietary", (req, res) => {
  res.render("dietary", {
    title: "Dietary",
  });
});

// PHYSICAL ROTUES START HERE
router.get("/physical/running", (req, res) => {
  res.render("running", {
    title: "Running Tracker",
  });
});
router.get("/physical/weightLifting", (req, res) => {
  res.render("weightLifting", {
    title: "Running Tracker",
  });
});
router.get("/physical/yoga", (req, res) => {
  res.render("yoga", {
    title: "Running Tracker",
  });
});
router.get("/physical/other", (req, res) => {
  res.render("other", {
    title: "Running Tracker",
  });
});

// MENTAL ROUTES START HERE
router.get("/mental/meditation", (req, res) => {
  res.render("meditation", {
    title: "Running Tracker",
  });
});
router.get("/mental/journaling", (req, res) => {
  res.render("journaling", {
    title: "Journaling Tracker",
  });
});
router.get("/mental/rest", (req, res) => {
  res.render("rest", {
    title: "Rest Tracker",
  });
});
router.get("/mental/other", (req, res) => {
  res.render("other", {
    title: "Running Tracker",
  });
});

// DIETARY ROUTES START HERE
router.get("/dietary/water", (req, res) => {
  res.render("water", {
    title: "Water Tracker",
  });
});
router.get("/dietary/fruit&veggie", (req, res) => {
  res.render("fruit&veggie", {
    title: "Fruit & Veggie Tracker",
  });
});
router.get("/dietary/protiein", (req, res) => {
  res.render("protein", {
    title: "Protein Tracker",
  });
});
router.get("/dietary/other", (req, res) => {
  res.render("other", {
    title: "Other Tracker",
  });
});
module.exports = router;
