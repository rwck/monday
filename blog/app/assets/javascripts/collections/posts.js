var app = app || {};

app.Posts = Backbone.Collection.extend({
	url: '/posts',
	model: app.Post
});


// var app = app || {}
//
// app.Posts = Backbone.Collection.extend({
//   model: app.Post
// });
