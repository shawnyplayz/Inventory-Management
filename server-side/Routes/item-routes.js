const express = require("express");
const router = express.Router();
const ItemController = require("../Controller/item-controller");

router.get("/", ItemController.getAllItems);
router.post("/", ItemController.addItems);
router.get("/sort", ItemController.sortByDate);
router.get("/vendor", ItemController.sortByVendorDate);
// router.get("/:id", ItemController.getUserById);
// router.put("/:id", ItemController.updateUser);
// router.delete("/:id", ItemController.deleteUser);

module.exports = router;
