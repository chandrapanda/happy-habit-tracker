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
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }

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
module.exports = router;
