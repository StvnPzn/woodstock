Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :categories, only: :index do
    resources :pieces, only: :create
  end
  resources :pieces, only: [:show, :edit, :update, :destroy] do
    resources :orders, only: :create
  end

  resources :orders, only: :show

  post "/pieces", to: "pieces#clone"
end
