const router = require("express").Router();
const { cocktailsList, makeCocktail, authentification } = require("../controllers/bartender.controller");

router.get("/", cocktailsList);
router.post("/make", makeCocktail);
router.post("/auth", authentification);

module.exports = router;
