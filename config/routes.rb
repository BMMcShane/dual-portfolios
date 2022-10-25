Rails.application.routes.draw do
  resources :languages
  resources :project_languages
  resources :awards
  resources :projects
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
