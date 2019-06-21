const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/")
  .post(usersController.createUser);

// Matches with "/api/users/:uid"
router
  .route("/:uid")
  .get(usersController.findUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
