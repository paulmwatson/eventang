Eventang::Application.routes.draw do
  get "identicons/:name", to: 'identicons#show'
  get "identicons/:name/:scale", to: 'identicons#show'
  get 'sign_out', to: 'users#sign_out'
  resources :events do 
    member do
      put 'join'
      put 'leave'
    end
  end
  resources :users
  root to: redirect('/app.html')
end
