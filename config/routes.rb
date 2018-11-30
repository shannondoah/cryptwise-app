Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :balances
  resources :expenses
  resource :dashboard, only: :show
  get :homepage, to: "pages#show"

  authenticated :user do
    root to: "dashboard#show", as: :authenticated_root
  end

  root to: "pages#show"
end
