App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    //console.log("Summary: ", responseFromChannel.users_stock);

    this.renderUserStockQuote(responseFromChannel);
    return;
  },
  renderUserStockQuote: function(responseFromChannel) {


    let volume = document.getElementById('volume');
    let avgDailyVolume = document.getElementById('avg_daily_volume');
    let previousClose = document.getElementById('previous_close');
    let fiftyTwoWeekRange = document.getElementById('fiftytwo_wk_range');
    let marketCapital = document.getElementById('market_capital');
    let betaBeta = document.getElementById('beta_beta');
    let latestEps = document.getElementById('latest_eps');
    let latestEpsDate = document.getElementById('latest_eps_date');
    let dividendYield = document.getElementById('dividend_yield');
    let exDividendDate = document.getElementById('ex_dividend_date');
    let peRatio = document.getElementById('pe_ratio');

    volume.innerHTML = responseFromChannel.users_stock.quote.latestVolume ? responseFromChannel.users_stock.quote.latestVolume.toLocaleString() : "-";

    avgDailyVolume.innerHTML = responseFromChannel.users_stock.quote.avgTotalVolume ? responseFromChannel.users_stock.quote.avgTotalVolume.toLocaleString() : "-";

    previousClose.innerHTML = responseFromChannel.users_stock.quote.previousClose ? responseFromChannel.users_stock.quote.previousClose : "-";

    fiftyTwoWeekRange.innerHTML = responseFromChannel.users_stock.quote.week52Low + " - " + responseFromChannel.users_stock.quote.week52High;

    marketCapital.innerHTML = responseFromChannel.users_stock.quote.marketCap.toLocaleString();

    betaBeta.innerHTML = responseFromChannel.users_stock.stats.beta.toFixed(2);

    latestEps.innerHTML = responseFromChannel.users_stock.stats.latestEPS;

    latestEpsDate.innerHTML = responseFromChannel.users_stock.stats.latestEPSDate;

    dividendYield.innerHTML = responseFromChannel.users_stock.stats.dividendRate + " (" + responseFromChannel.users_stock.stats.dividendYield.toFixed(3) + "%)";

    exDividendDate.innerHTML = responseFromChannel.users_stock.stats.exDividendDate === 0 ? "-" :responseFromChannel.users_stock.stats.exDividendDate.substr(0, 10);

    peRatio.innerHTML = responseFromChannel.users_stock.quote.peRatio;

  }
});
