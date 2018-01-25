require 'open-uri'
class MarketController < ApplicationController
  def gainers
    # this method's job is to just display page
  end

  def get_gainers

    mostActiveResponse = open('https://api.iextrading.com/1.0/stock/market/list/mostactive').read

    mostGainersResponse = open('https://api.iextrading.com/1.0/stock/market/list/gainers').read

    mostLosersResponse = open('https://api.iextrading.com/1.0/stock/market/list/losers').read

    lastTenNewsResponse = open('https://api.iextrading.com/1.0/stock/market/news/last/10').read


    # Broadcasting data received from api call above to market channel
    # Function broadcast, [channel name]: [data in json form], [status code]
    ActionCable.server.broadcast 'market_channel',
      most_active: JSON.parse(mostActiveResponse), most_gainers: JSON.parse(mostGainersResponse), most_losers: JSON.parse(mostLosersResponse), ten_news: JSON.parse(lastTenNewsResponse)


  end

end
