const express = require("express");
const router = express();

router.get("/categories", (req, res) => {
  res.status(200).json({
    message: "halaman",
  });
});

/* const { create, index, find, update, destroy } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.get("/categories", authenticateUser, authorizeRoles("organizer"), index);
router.get(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  find
);
router.put(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
router.delete(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);

router.post(
  "/categories",
  authenticateUser,
  authorizeRoles("organizer"),
  create
);
 */

module.exports = router;
