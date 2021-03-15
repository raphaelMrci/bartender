const router = require("express").Router();

//const { route } = require("./bartender.routes");
const bartender = require("./bartender.routes");
const admin = require("./admin.routes");
// const cocktails = require("./cocktails.routes");
// const ingredients = require("./ingredients.routes");
// const slots = require("./slots.routes");

router.use("/", bartender);
router.use("/admin", admin);
// router.use("/cocktails", cocktails);
// router.use("/ingredients", ingredients);
// router.use("/slots", slots);

module.exports = router;
