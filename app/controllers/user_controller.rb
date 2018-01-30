require 'open-uri'
class UserController < ApplicationController
  def show
    @user = User.find(params[:id])
    @userFavorites = @user.favorite_stocks

    stocks = @userFavorites.map{|stock| stock.symbol}.join(",")


    userFavoriteStocks = open("https://api.iextrading.com/1.0/stock/market/batch?symbols=#{stocks}&types=quote,logo").read

    # "https://api.iextrading.com/1.0/stock/market/batch?symbols=#{aapl,fb}&types=quote,logo"

    ActionCable.server.broadcast 'favorite_channel',
      my_favorites: JSON.parse(userFavoriteStocks)

  end

  def get_show

  end
end
