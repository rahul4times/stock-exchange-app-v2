Rails.application.routes.draw do

  get 'learn/show'


  resources :favorite_stocks

  # User profile page
  get 'get_show/:id', to: "user#get_show"
  get 'user/:id', to: "user#show", as: "user"

  #  Home page
  root to: 'market#gainers'
  get 'get_gainers', to: 'market#get_gainers'


  # Public view stock page
  get 'stock/get_view/:stock', to: 'stock#get_view'
  get 'stock/view' => 'stock#view', as: 'search_stock'


  devise_for :users

  # Actioncable path
  mount ActionCable.server => '/cable'

end
