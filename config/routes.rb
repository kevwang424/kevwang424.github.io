Rails.application.routes.draw do

  root to: 'application#home'
  get '/about', to: 'application#about'
  get '/projects', to: 'application#projects'
  get '/contact', to: 'application#contact'

end
