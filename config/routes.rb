Rails.application.routes.draw do
  root to: 'static_pages#root'
  get "/index", to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:show, :index, :create, :update, :destroy]
    resources :users, only: [:create, :show, :edit, :update]
    resource :session, only: [:create, :show, :destroy]
  end
end
