# Blog app in backbone todo

make a blog

models
  app.Post

collections
  app.Posts

router
  app.Router

  /
    index - list of all blog Posts
  /posts/:id
    show - the full content of a single Post

views
  app.AppView
  app.PostListItemView
  app.PostView
