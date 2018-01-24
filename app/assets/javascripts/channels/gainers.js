App.gainers = App.cable.subscriptions.create('MarketChannel', {
  received: function(data) {
    let responseFromChannel = data;

    console.log("Data from API: ", responseFromChannel.most_active);

    this.renderActive(responseFromChannel);
    return;
  },
  renderActive: function(responseFromChannel) {

    let response = responseFromChannel.most_active;
    let activeTable = document.getElementById('most_active');

    $(activeTable).empty();
    for(let i=0; i<responseFromChannel.most_active.length; i++){
      let tableRow = document.createElement('tr');
      let companySymbol = document.createElement('td');
      let priceChange = document.createElement('td');
      let lastPrice = document.createElement('td');

      companySymbol.innerHTML = responseFromChannel.most_active[i].symbol +
      "<br><span style='font-size: 11px;'>" + responseFromChannel.most_active[i].companyName.substr(0,20) + "</span>";

      if(responseFromChannel.most_active[i].change < 0){
        priceChange.innerHTML = "<span class='text-danger'>" +
        "<i class='fa fa-caret-down fa-2x'></i>  " + responseFromChannel.most_active[i].change.toFixed(2) +
        " (" + ((responseFromChannel.most_active[i].changePercent) * 100).toFixed(2) + "%)" + "</span>";
      } else if (responseFromChannel.most_active[i].change > 0) {
        priceChange.innerHTML = "<span class='text-success'>" +
        "<i class='fa fa-caret-up fa-2x'></i>  " + responseFromChannel.most_active[i].change.toFixed(2) +
        " (" + ((responseFromChannel.most_active[i].changePercent) * 100).toFixed(2) + " )" + "</span>";
      } else {
        priceChange.innerHTML = " -- " + " -- ";
      }
      lastPrice.innerHTML = responseFromChannel.most_active[i].latestPrice;
      tableRow.appendChild(companySymbol);
      tableRow.appendChild(priceChange);
      tableRow.appendChild(lastPrice);
      activeTable.appendChild(tableRow);
    }
  }
});
