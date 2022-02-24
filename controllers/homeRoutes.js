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
  res.render("homepage");
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
  res.render("habitPage", {
    title: "Running ",
  });
});
router.get("/physical/weightLifting", (req, res) => {
  res.render("habitPage", {
    title: "Weight Lifting",
  });
});
router.get("/physical/yoga", (req, res) => {
  res.render("habitPage", {
    title: "Yoga",
  });
});
router.get("/physical/other", (req, res) => {
  res.render("habitPage", {
    title: "Other",
  });
});

// MENTAL ROUTES START HERE
router.get("/mental/meditation", (req, res) => {
  res.render("habitPage", {
    title: "Meditation",
  });
});
router.get("/mental/journaling", (req, res) => {
  res.render("habitPage", {
    title: "Journaling ",
  });
});
router.get("/mental/rest", (req, res) => {
  res.render("habitPage", {
    title: "Rest ",
  });
});
router.get("/mental/other", (req, res) => {
  res.render("habitPage", {
    title: "Other ",
  });
});

// DIETARY ROUTES START HERE
router.get("/dietary/water", (req, res) => {
  res.render("habitPage", {
    title: "Water ",
  });
});
router.get("/dietary/fruit&veggie", (req, res) => {
  res.render("habitPage", {
    title: "Fruit & Veggie ",
  });
});
router.get("/dietary/protiein", (req, res) => {
  res.render("habitPage", {
    title: "Protein ",
  });
});
router.get("/dietary/other", (req, res) => {
  res.render("habitPage", {
    title: "Other ",
  });
});
module.exports = router;
