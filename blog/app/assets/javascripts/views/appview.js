var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#page",

  events: {
    "click .post-item": "onClickPost"
  },

  render: function() {
    this.$el.html("<h1>Welcome</h1>");

    console.log(this.collection);

    // var view = this;

    var listElem = $("<div/>").addClass("post-item-list");

    // for (var i = 0; i < this.collection.length; i++) {
    //   var post = this.collection.at(i);
    //
    //   var a = $("<a/>").attr("href", "#posts/" + post.cid).text(post.get("title"));
    //   route = "#posts/" + post.cid;
    // }

    this.collection.each(function(post){
      var a = $("<a/>").attr("href", "#posts/" + post.cid).text(post.get("title"));
      route = "#posts/" + post.cid;

      console.log(route);
      // console.log(post.toJSON());
      // console.log(post);
      var title = $("<h1/>");
      title.append(a);

      var body = $("<div>").html(post.get("body"));
      var postElem = $("<div>").addClass("post-item");
      postElem.data("cid", post.cid);

      postElem.append(title);
      postElem.append(body);
      // view.$el.append(postElem);
      listElem.append(postElem);
      // var blob = postElem.toJSON();
      // console.log(blob);
    });
    this.$el.append(listElem);
  },

  onClickPost: function(event) {
    console.log("Clicked on Post");
    console.log($(event.currentTarget).data("cid"));
    var route = ($(event.currentTarget).data("cid"));
    app.router.navigate("#posts/" + route, true);


    // alert("Cliekced on pose")
  }
});
