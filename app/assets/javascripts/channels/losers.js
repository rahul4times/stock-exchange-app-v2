App.cable.subscriptions.create('MarketChannel', {
  received: function(data) {
    let responseFromChannel = data;

    // console.log("Losers: ", responseFromChannel.most_losers);

    this.renderLosers(responseFromChannel);
    return;
  },
  renderLosers: function(responseFromChannel) {

    let response = responseFromChannel.most_losers;
    var losersTable = document.getElementById('most_losers');

    $(losersTable).empty();
    for(let i=0; i<responseFromChannel.most_losers.length; i++){
      let tableRow = document.createElement('tr');
      let companySymbol = document.createElement('td');
      let priceChange = document.createElement('td');
      let lastPrice = document.createElement('td');

      companySymbol.innerHTML = responseFromChannel.most_losers[i].symbol +
      "<br><span style='font-size: 11px;'>" + responseFromChannel.most_losers[i].companyName.substr(0,20) + "</span>";

      if(responseFromChannel.most_losers[i].change < 0){
        priceChange.innerHTML = "<span class='text-danger'>" +
        "<i class='fa fa-arrow-down'></i>  " + responseFromChannel.most_losers[i].change.toFixed(2) +
        " (" + ((responseFromChannel.most_losers[i].changePercent) * 100).toFixed(2) + "%)" + "</span>";
      } else if (responseFromChannel.most_losers[i].change > 0) {
        priceChange.innerHTML = "<span class='text-success'>" +
        "<i class='fa fa-arrow-up'></i>  " + responseFromChannel.most_losers[i].change.toFixed(2) +
        " (" + ((responseFromChannel.most_losers[i].changePercent) * 100).toFixed(2) + " %)" + "</span>";
      } else {
        priceChange.innerHTML = "<i class='fa fa-minus'></i> <i class='fa fa-minus'></i>";
      }
      lastPrice.innerHTML = responseFromChannel.most_losers[i].latestPrice;

      tableRow.appendChild(companySymbol);
      tableRow.appendChild(priceChange);
      tableRow.appendChild(lastPrice);
      losersTable.appendChild(tableRow);
    }
  }
});
