Rails.application.routes.draw do
  root to: 'static_pages#root'
  get "/index", to: 'static_pages#root'
  get "/photos/:id", to: 'static_pages#root'
  get 'api/upload', to: 'api/uploads#upload'
  get '/users/:id', to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:show, :index, :create, :update, :destroy]
    resources :users, only: [:create, :show, :edit, :update]
    resources :comments, only: [:create, :show, :destroy]
    resource :session, only: [:create, :show, :destroy]
  end
end
