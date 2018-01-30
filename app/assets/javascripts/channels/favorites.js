App.cable.subscriptions.create('FavoriteChannel', {
  received: function(data) {
    let responseFromChannel = data;

    //console.log("My Favorites: ", responseFromChannel.my_favorites);

    this.renderMyFavorites(responseFromChannel);
    return;
  },
  renderMyFavorites: function(responseFromChannel) {

    let response = responseFromChannel;
    let favoriteTbody = document.getElementById('favorite_stocks');

    $(favoriteTbody).empty();


    for(let key in response.my_favorites){
      let tRow = document.createElement('tr');
      let symbol = document.createElement('td');
      let company = document.createElement('td');
      let latestPrice = document.createElement('td');
      let change = document.createElement('td');

      symbol.innerHTML = response.my_favorites[key].quote.symbol;
      company.innerHTML = response.my_favorites[key].quote.companyName;
      latestPrice.innerHTML = response.my_favorites[key].quote.latestPrice;

      if(response.my_favorites[key].quote.change < 0){
        change.innerHTML = "<span class='text-danger'>" +
        "<i class='fa fa-arrow-down'></i>  " + response.my_favorites[key].quote.change.toFixed(2) +
        " (" + ((response.my_favorites[key].quote.changePercent) * 100).toFixed(2) + "%)" + "</span>";
      } else if (response.my_favorites[key].quote.change > 0) {
        change.innerHTML = "<span class='text-success'>" +
        "<i class='fa fa-arrow-up'></i>  " + response.my_favorites[key].quote.change.toFixed(2) +
        " (" + ((response.my_favorites[key].quote.changePercent) * 100).toFixed(2) + " %)" + "</span>";
      }
      
      tRow.appendChild(symbol);
      tRow.appendChild(company);
      tRow.appendChild(latestPrice);
      tRow.appendChild(change);
      favoriteTbody.appendChild(tRow);
    }
  }
});
