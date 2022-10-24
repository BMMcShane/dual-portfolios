Rails.application.routes.draw do
  resources :languages
  resources :project_languages
  resources :awards
  resources :projects
  resources :links
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
