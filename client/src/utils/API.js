import axios from "axios";

export default {
  // Creates a user
  createUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  // Gets a user
  findUser: function (uid) {
    return axios.get("/api/users/" + uid);
  },
  // Updates a user
  updateUser: function (uid, userData) {
    return axios.put("/api/users/" + uid, userData);
  },
  // Deletes a user
  deleteUser: function (uid) {
    return axios.delete("/api/users/" + uid);
  }
};
