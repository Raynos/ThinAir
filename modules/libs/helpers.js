var collection = require("mongo-col"),
    pd = require("pd");

var Helpers = {
  checkIfAuthorized: function(req, res) {
    if (req.session.is_logged) {
      return true;
    } else {
      this.messages.addMessage(req, "error", "You need to be logged in to access this page.");
      return res.redirect("/");
    }
  },

  isGet: function(req) {
    if (req.route.method === "get") {
      return true;
    } else {
      return false;
    }
  },

  isPost: function(req) {
    if (req.route.method === "post") {
      return true;
    } else {
      return false;
    }
  },

  isNew: function(object) {
    if (object._id === undefined || object._id === "") {
      return true;
    } else {
      return false;
    }
  },

  isDefined: function(object) {
    if (object === undefined) {
      return false;
    } else {
      return true;
    }
  },

  slugify: function(str) {
    var from, i, l, to;
    str = str.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();
    from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    to = "aaaaeeeeiiiioooouuuunc------";
    i = 0;
    l = from.length;
    while (i < l) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
      i++;
    }
    str = str.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
    return str;
  }
};

module.exports = Helpers;