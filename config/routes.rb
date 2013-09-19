Eventang::Application.routes.draw do
  get "identicons/:name", to: 'identicons#show'
  get "identicons/:name/:scale", to: 'identicons#show'
  # root 'welcome#index'
end
