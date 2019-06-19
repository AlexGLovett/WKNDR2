import axios from "axios";

export default {
  // Gets all books
  getUser: function() {
    return axios.get("/api/users");
  }
};
