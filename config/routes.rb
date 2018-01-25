Rails.application.routes.draw do
  # get 'stock/view'

  root to: 'market#gainers'
  get 'get_gainers', to: 'market#get_gainers'

  post 'stock/view' => 'stock#view', as: 'search_stock'

  devise_for :users

  mount ActionCable.server => '/cable'

end
