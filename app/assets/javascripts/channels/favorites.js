App.cable.subscriptions.create('FavoriteChannel', {
  received: function(data) {
    let responseFromChannel = data;

    console.log("My Favorites: ", responseFromChannel.my_favorites);

    this.renderMyFavorites(responseFromChannel);
    return;
  },
  renderMyFavorites: function(responseFromChannel) {

    let response = responseFromChannel.ten_news;



  }
});
