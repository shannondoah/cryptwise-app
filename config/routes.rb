Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :payments

  authenticated :user do
    root to: "payments#index", as: :authenticated_root
  end

  root to: "pages#show"
end
