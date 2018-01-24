require 'open-uri'
class MarketController < ApplicationController
  def gainers
    # this method's job is to just display page
  end

  def get_gainers
    puts "this is firing"
    response = open('https://api.iextrading.com/1.0/stock/aapl/quote').read

    # Broadcasting data received from api call above to market channel
    # Function broadcast, [channel name], [data in json form], [status code]
    ActionCable.server.broadcast 'market_channel',
      top_gainers: JSON.parse(response)

  end

end
