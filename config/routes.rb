Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # devise_for :users do
  #   get '/users/sign_out' => 'devise/sessions#destroy'
  # end
  devise_for :users
  resources :dogs
  root to: "dogs#index"
end
