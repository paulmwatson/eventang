Eventang::Application.routes.draw do
  get "users/index"
  get "users/show"
  get "identicons/:name", to: 'identicons#show'
  get "identicons/:name/:scale", to: 'identicons#show'
  #get ":id", to: 'events#show'
  resources :events
  root to: redirect('/app.html')
end
