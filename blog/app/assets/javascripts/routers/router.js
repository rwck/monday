var app = app || {}

app.Router = Backbone.Router.extend({
  routes: {
    "posts/:id": "postShow",
    "*other": "postIndex"
  },

  postShow: function(id) {
    console.log("PostShow is being fired", id);
    var post = app.blogPosts.get(id);
    var view = new app.PostView({model: post});
    view.render();
  },

  postIndex: function() {
    console.log("PostIndex is being fired");
    var view = new app.AppView({collection: app.blogPosts});
    view.render();
  },
});
