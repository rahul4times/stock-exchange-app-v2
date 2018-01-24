Rails.application.routes.draw do
  root to: 'market#gainers'
  get 'get_gainers', to: 'market#get_gainers'

  devise_for :users

  mount ActionCable.server => '/cable'

end
