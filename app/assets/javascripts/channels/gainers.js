App.gainers = App.cable.subscriptions.create('MarketChannel', {
  received: function(data) {
    let responseFromChannel = data;

    // console.log("Gainers: ", responseFromChannel.most_gainers);

    this.renderGainers(responseFromChannel);
    return;
  },
  renderGainers: function(responseFromChannel) {

    let response = responseFromChannel.most_gainers;
    var gainersTable = document.getElementById('most_gainers');

    $(gainersTable).empty();
    for(let i=0; i<responseFromChannel.most_gainers.length; i++){
      let tableRow = document.createElement('tr');
      let companySymbol = document.createElement('td');
      let priceChange = document.createElement('td');
      let lastPrice = document.createElement('td');

      companySymbol.innerHTML = responseFromChannel.most_gainers[i].symbol +
      "<br><span style='font-size: 11px;'>" + responseFromChannel.most_gainers[i].companyName.substr(0,20) + "</span>";

      if(responseFromChannel.most_gainers[i].change < 0){
        priceChange.innerHTML = "<span class='text-danger'>" +
        "<i class='fa fa-arrow-down'></i>  " + responseFromChannel.most_gainers[i].change.toFixed(2) +
        " (" + ((responseFromChannel.most_gainers[i].changePercent) * 100).toFixed(2) + "%)" + "</span>";
      } else if (responseFromChannel.most_gainers[i].change > 0) {
        priceChange.innerHTML = "<span class='text-success'>" +
        "<i class='fa fa-arrow-up'></i>  " + responseFromChannel.most_gainers[i].change.toFixed(2) +
        " (" + ((responseFromChannel.most_gainers[i].changePercent) * 100).toFixed(2) + " %)" + "</span>";
      } else {
        priceChange.innerHTML = "<i class='fa fa-minus'></i> <i class='fa fa-minus'></i>";
      }
      lastPrice.innerHTML = responseFromChannel.most_gainers[i].latestPrice;

      tableRow.appendChild(companySymbol);
      tableRow.appendChild(priceChange);
      tableRow.appendChild(lastPrice);
      gainersTable.appendChild(tableRow);
    }
  }
});
