App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    //console.log("News: ", responseFromChannel.users_stock);

    this.renderUserStockNews(responseFromChannel);
    return;
  },
  renderUserStockNews: function(responseFromChannel) {


    let compNewsDiv = document.getElementById('comp_news');

     $(compNewsDiv).empty();

     for(let i=0; i<4; i++){
       let newsDataTime = document.createElement('h6');
       let newsHeading = document.createElement('h5');
       let newsSummary = document.createElement('p');
       let horizontalLine = document.createElement('hr');
       let pageBreak = document.createElement('br');
       newsDataTime.innerHTML = responseFromChannel.users_stock.news[i].datetime.substr(0, 10)+ ", " +
       responseFromChannel.users_stock.news[i].datetime.substr(11, 5) +
        " | " + responseFromChannel.users_stock.news[i].source;
       newsHeading.innerHTML =
       "<a href=" + responseFromChannel.users_stock.news[i].url + ">" + responseFromChannel.users_stock.news[i].headline + "</a>";
       newsSummary.innerHTML = responseFromChannel.users_stock.news[i].summary;

       compNewsDiv.appendChild(newsDataTime);
       compNewsDiv.appendChild(newsHeading);
       compNewsDiv.appendChild(newsSummary);
       compNewsDiv.appendChild(horizontalLine);
       compNewsDiv.appendChild(pageBreak);
     }
  }
});
