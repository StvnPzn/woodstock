Rails.application.routes.draw do
  devise_for :views
  devise_for :users
  root to: 'pages#home'
  resources :categories, only: :index do
    resources :pieces, only: :create
  end
  resources :pieces, only: [:index, :show, :edit, :update, :destroy] do
    resources :orders, only: :create
  end

  resources :orders, only: :show

  resources :parts, only: [:create, :update]

  post "/pieces", to: "pieces#clone"
  get "/dashboard", to: 'users#index'
end
