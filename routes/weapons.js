const express = require("express");
const router = express.Router();

const WeaponController = require("../controllers/index");

router.get("/", WeaponController.getAllWeapons);

router.get("/:id", WeaponController.getSingleWeapon);

router.post("/", WeaponController.createWeapon);

router.patch("/", WeaponController.updateWeapon);

router.delete("/", WeaponController.deleteWeapon);

module.exports = router;
