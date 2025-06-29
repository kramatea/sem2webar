var router = require("express").Router();

router.get("/", async function (req, res, next) {
  console.log("usao u router.get()");
  try {
    res.render("index", {
      title: "Web AR Application",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
