var app = app || {};

app.Post = Backbone.Model.extend({
	urlRoot: '/posts',
	
	defaults: {
		title: "",
		body: ""
	}
});


// var app = app || {}
//
// app.Post = Backbone.Model.extend({
//   defaults: {
//     title: "",
//     body: ""
//   }
// });
