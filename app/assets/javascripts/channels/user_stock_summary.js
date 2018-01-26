App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    console.log("Summary: ", responseFromChannel.users_stock.news);

    this.renderUserStockQuote(responseFromChannel);
    return;
  },
  renderUserStockQuote: function(responseFromChannel) {

    let response = responseFromChannel.users_stock;
    let companyHeaderDiv = document.getElementById('company_summary');

     $(companyHeaderDiv).empty();


       let nameSymbol = document.createElement('p');
       let latestPrice = document.createElement('h1');
       let changePricePercent = document.createElement('h3');

       nameSymbol.innerHTML = '<p class="lead">' + responseFromChannel.users_stock.quote.companyName + " (" +
       responseFromChannel.users_stock.quote.symbol + ")" + '</p>';

       latestPrice.innerHTML = '<h1 class="display-3 text-white">' + responseFromChannel.users_stock.quote.latestPrice + '</h1>';

       if(responseFromChannel.users_stock.quote.change < 0){
         changePricePercent.innerHTML = '<h3 class="text-danger">' +
         "<i class='fa fa-arrow-down'></i>  " + responseFromChannel.users_stock.quote.change.toFixed(2) + " (" +
         ((responseFromChannel.users_stock.quote.changePercent) * 100).toFixed(2) + "%)" + "</h3>";
       } else if(responseFromChannel.users_stock.quote.change > 0){
         changePricePercent.innerHTML = '<h3 class="text-success">' +
         "<i class='fa fa-arrow-up'></i>  " + responseFromChannel.users_stock.quote.change.toFixed(2) + " (" +
         ((responseFromChannel.users_stock.quote.changePercent) * 100).toFixed(2) + "%)" + "</h3>";
       } else {
         changePricePercent.innerHTML = "<i class='fa fa-minus'></i> <i class='fa fa-minus'></i>";
       }

       companyHeaderDiv.appendChild(nameSymbol);
       companyHeaderDiv.appendChild(latestPrice);
       companyHeaderDiv.appendChild(changePricePercent);
  }
});
