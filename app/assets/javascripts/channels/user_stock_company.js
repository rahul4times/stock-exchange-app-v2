App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    console.log("Company: ", responseFromChannel.users_stock.news);

    this.renderUserStockQuote(responseFromChannel);
    return;
  },
  renderUserStockQuote: function(responseFromChannel) {


    let compLogo = document.getElementById('comp_logo');
    let compDescription = document.getElementById('comp_description');
    let compCeo = document.getElementById('comp_ceo');
    let compSymbol = document.getElementById('comp_symbol');
    let compExchange = document.getElementById('comp_exchange');
    let compIndustry = document.getElementById('comp_industry');
    let compSector = document.getElementById('comp_sector');
    let compWebsite = document.getElementById('comp_website');

    compLogo.src = responseFromChannel.users_stock.logo.url;
    compDescription.innerHTML =  responseFromChannel.users_stock.company.description;

    compCeo.innerHTML = "CEO: " + responseFromChannel.users_stock.company.CEO;

    compSymbol.innerHTML = "Symbol: " + responseFromChannel.users_stock.company.symbol;

    compExchange.innerHTML = "Exchange: " + responseFromChannel.users_stock.company.exchange;

    compIndustry.innerHTML = "Industry: " + responseFromChannel.users_stock.company.industry;

    compSector.innerHTML = "Sector: " + responseFromChannel.users_stock.company.sector;

    compWebsite.innerHTML = "Website: " + responseFromChannel.users_stock.company.website;

  }
});
