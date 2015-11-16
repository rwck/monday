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

  ---

# Move it into rails
rails new  
set up post model and api
rails g scaffold post title body:text
rake db:create
rake db:migrate
Move files
Move BB files into assets folder
Move html into erb file
move library files into vendor folder
update application.js //=require_tree ./models

* update bb models to fet/save to rails api
* url: '/posts'
* urlroot: ''/posts'
* play with it and check it's working

# move all BB files into `app/assets/javascripts`
