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
       let newsDataTime = document.createElement('h6');
       let newsHeading = document.createElement('h5');
       let newsSummary = document.createElement('p');
       let horizontalLine = document.createElement('hr');
       let pageBreak = document.createElement('br');
       newsDataTime.innerHTML = responseFromChannel.ten_news[i].datetime.substr(0, 10)+ ", " +
       responseFromChannel.ten_news[i].datetime.substr(11, 5) +
        " | " + responseFromChannel.ten_news[i].source;
       newsHeading.innerHTML =
       "<a href=" + responseFromChannel.ten_news[i].url + ">" + responseFromChannel.ten_news[i].headline + "</a>";
       newsSummary.innerHTML = responseFromChannel.ten_news[i].summary;

       tenNewsDiv.appendChild(newsDataTime);
       tenNewsDiv.appendChild(newsHeading);
       tenNewsDiv.appendChild(newsSummary);
       tenNewsDiv.appendChild(horizontalLine);
       tenNewsDiv.appendChild(pageBreak);
     }
  }
});
