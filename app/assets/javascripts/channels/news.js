App.gainers = App.cable.subscriptions.create('NewsChannel', {
  received: function(data) {
    let responseFromChannel = data;

    // console.log("News: ", responseFromChannel);

    this.renderActive(responseFromChannel);
    return;
  },
  renderActive: function(responseFromChannel) {

    let response = responseFromChannel.ten_news;
    let tenNewsDiv = document.getElementById('ten_news');

     $(tenNewsDiv).empty();

     for(let i=0; i<responseFromChannel.ten_news.length; i++){
       let newsDataTime = document.createElement('p');
       let newsHeading = document.createElement('h5');
       let newsSummary = document.createElement('p');
       let pageBreak = document.createElement('br')
       newsDataTime.innerHTML = responseFromChannel.ten_news[i].datetime +
        " | " + responseFromChannel.ten_news[i].source;
       newsHeading.innerHTML = responseFromChannel.ten_news[i].headline;
       newsSummary.innerHTML = responseFromChannel.ten_news[i].summary;

       tenNewsDiv.appendChild(newsDataTime);
       tenNewsDiv.appendChild(newsHeading);
       tenNewsDiv.appendChild(newsSummary);
       tenNewsDiv.appendChild(pageBreak);
     }
  }
});
