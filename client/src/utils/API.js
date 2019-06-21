import axios from "axios";

export default {
  // Creates a user
  createUser: function () {
    return axios.get("/api/users");
  },
  // Gets a user
  getUser: function () {
    return axios.get("/api/users");
  }
};
