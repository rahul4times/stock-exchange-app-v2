App.gainers = App.cable.subscriptions.create('MarketChannel', {
  received: function(data) {
    let responseFromChannel = data;


    console.log("Data from API: ", responseFromChannel.top_gainers);

    return document.getElementById('gainer').innerHTML = this.renderGainers(responseFromChannel);

  },
  renderGainers: function(responseFromChannel) {
    let response = responseFromChannel.top_gainers;
    let result = '';
      for(let x in response){
        result +=  "<p>" + response[x] + "</p>";
      }
      return result;
  }
});
