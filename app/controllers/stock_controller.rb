require 'open-uri'
class StockController < ApplicationController

  def view

    @query = "#{params[:query]}"

  end

  def get_view

    userSearchResponse = open("https://api.iextrading.com/1.0/stock/#{params[:stock]}/batch?types=quote,summary,news,chart,financials&range=1m&last=10").read

    ActionCable.server.broadcast 'stock_channel',
      users_stock: JSON.parse(userSearchResponse)
  end

end
