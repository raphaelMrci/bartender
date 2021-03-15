const router = require("express").Router();
const { editSlots, addIngredient, delIngredient } = require("../controllers/admin.controller");

router.get("/slots")
router.patch("/slots", editSlots);


router.post("/ingredients", addIngredient);
router.post("/ingredients/delete", delIngredient);

module.exports = router;