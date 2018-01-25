App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    console.log("User Stock: ", responseFromChannel.users_stock);

    this.renderUserStock(responseFromChannel);
    return;
  },
  renderUserStock: function(responseFromChannel) {

    let response = responseFromChannel.users_stock;
    let userStockDiv = document.getElementById('user_stock');

     $(userStockDiv).empty();


  }
});
