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
        priceChange.innerHTML = "<span class='text-danger'>" + responseFromChannel.most_active[i].change.toFixed(2) +
        " (" + responseFromChannel.most_active[i].changePercent + ")" + "</span>";
      } else if (responseFromChannel.most_active[i].change > 0) {
        priceChange.innerHTML = "<span class='text-success'>" + responseFromChannel.most_active[i].change +
        " (" + responseFromChannel.most_active[i].changePercent + ")" + "</span>";
      } else if(responseFromChannel.most_active[i].change == null){
        priceChange.innerHTML = " -- " + " -- ";
      } else {
        priceChange.innerHTML = responseFromChannel.most_active[i].change +
        " (" + responseFromChannel.most_active[i].changePercent + ")";
      }


      lastPrice.innerHTML = responseFromChannel.most_active[i].latestPrice;

      tableRow.appendChild(companySymbol);
      tableRow.appendChild(priceChange);
      tableRow.appendChild(lastPrice);
      activeTable.appendChild(tableRow);
    }





      // for(let i=0; i<responseFromChannel.most_active.length; i++){
      //   result += "<p>" + responseFromChannel.most_active[i].symbol + "</p>" +
      //     "<p>" + responseFromChannel.most_active[i].companyName + "</p>" +
      //     "<p>" + responseFromChannel.most_active[i].latestPrice + "</p>" +
      //     "<p>" + responseFromChannel.most_active[i].change + "</p>" +
      //     "<p>" + responseFromChannel.most_active[i].changePercent + "</p>";
      // }

      // for(let i=0; i<responseFromChannel.most_active.length; i++){
      //   result += "<tr>" + "<td>" + responseFromChannel.most_active[i].symbol + "<br><span style='font-size: 10px;'>" + responseFromChannel.most_active[i].companyName + "</span>" +
      //     "<td>" + responseFromChannel.most_active[i].latestPrice + "</td>" +
      //     "<td>" + responseFromChannel.most_active[i].change + "(" + responseFromChannel.most_active[i].changePercent + ")" + "</td>" +"</tr>";
      // }


      // for(let x in response){
      //   result +=  "<p>" + response[x] + "</p>";
      // }






  }
});
