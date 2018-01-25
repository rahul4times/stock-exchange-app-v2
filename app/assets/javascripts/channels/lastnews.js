App.gainers = App.cable.subscriptions.create('LastTenNewsChannel', {
  received: function(data) {
    let responseFromChannel = data;

    console.log("News: ", responseFromChannel.ten_news);

    this.renderActive(responseFromChannel);
    return;
  },
  renderActive: function(responseFromChannel) {

    let response = responseFromChannel.ten_news;
    var losersTable = document.getElementById('most_losers');

    $(losersTable).empty();

  }
});
