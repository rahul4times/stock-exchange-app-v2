require 'open-uri'
class MarketController < ApplicationController
  def gainers
    # this method's job is to just display page
  end

  def get_gainers
    puts "this is firing"
    mostActiveResponse = open('https://api.iextrading.com/1.0/stock/market/list/mostactive').read

    # Broadcasting data received from api call above to market channel
    # Function broadcast, [channel name], [data in json form], [status code]
    ActionCable.server.broadcast 'market_channel',
      most_active: JSON.parse(mostActiveResponse)

  end

end
