App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    // console.log("User Stock: ", responseFromChannel.users_stock);

    this.renderUserStockHeader(responseFromChannel);
    return;
  },
  renderUserStockHeader: function(responseFromChannel) {

    let response = responseFromChannel.users_stock;

       let nameSymbol = document.getElementById('company_header_name')
       let latestPrice = document.getElementById('company_header_price')
       let changePricePercent = document.getElementById('company_header_change')

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

  }
});
