require 'open-uri'
class StockController < ApplicationController
  def view
    userSearchResponse = open('https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,summary,news,chart,financials&range=1m&last=10').read

    @query = "#{params[:query]}"
    puts @query
  end
end
