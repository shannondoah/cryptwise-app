Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    resources :wallet_addresses, only: %i[new create] do
      get :info, on: :collection
    end
  end
  resources :payments, only: %i[new create]
  resources :expenses, only: %i[new create]
  resource :dashboard, only: :show
  get :homepage, to: "pages#show"

  authenticated :user do
    root to: "dashboard#show", as: :authenticated_root
  end

  root to: "pages#show"
end
