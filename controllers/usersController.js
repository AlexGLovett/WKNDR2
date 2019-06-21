const db = require("../models");

// Defining methods for the User Controller
module.exports = {
  findUser: function (req, res) {
    db.User.findOne({ "uid": req.params.uid })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function (req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function (req, res) {
    db.User.findOneAndUpdate({ uid: req.params.uid }, req.body, {
      new: true,
      upsert: true
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteUser: function (req, res) {
    db.User.findOneAndDelete({ uid: req.params.uid })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
