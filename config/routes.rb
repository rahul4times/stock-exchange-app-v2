Rails.application.routes.draw do

  root to: 'market#gainers'
  get 'get_gainers', to: 'market#get_gainers'


  # get 'stock/view', to: 'stock#view'
  # root to:'stock#view'
  get 'stock/get_view/:stock', to: 'stock#get_view'
  get 'stock/view' => 'stock#view', as: 'search_stock'

  devise_for :users

  mount ActionCable.server => '/cable'

end
