const express = require("express");
const router = express.Router();
const ItemController = require("../Controller/item-controller");

router.get("/", ItemController.getAllItems);
router.post("/", ItemController.addItems);
router.get("/date", ItemController.sortByDate);
router.get("/vendorName", ItemController.sortByDate);
// router.get("/:id", ItemController.getUserById);
// router.put("/:id", ItemController.updateUser);
// router.delete("/:id", ItemController.deleteUser);

module.exports = router;
