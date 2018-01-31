require 'open-uri'
class StockController < ApplicationController

  def view

    @query = "#{params[:query]}"

  end

  def get_view

    userSearchResponse = open("https://api.iextrading.com/1.0/stock/#{params[:stock]}/batch?types=quote,stats,news,chart,company,financials,logo&range=1m&last=10").read

    userSearchChartResponse = open("https://api.iextrading.com/1.0/stock/#{params[:stock]}/chart/1d").read


    ActionCable.server.broadcast 'stock_channel',
      users_stock: JSON.parse(userSearchResponse),
      chart: JSON.parse(userSearchChartResponse)
  end

end
