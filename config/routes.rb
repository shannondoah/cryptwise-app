Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }

  authenticated :user do
    root to: "dashboard#show", as: :authenticated_root
  end

  resources :users do
    resources :wallet_addresses, only: %i[new create] do
      get :info, on: :collection
    end
  end
  resources :payments, only: %i[new create]
  resources :expenses, only: %i[new create]
  resources :friendships, only: %i[new create]
  resource :dashboard, only: :show
  get :homepage, to: "pages#show"

  root to: "pages#show"
end
