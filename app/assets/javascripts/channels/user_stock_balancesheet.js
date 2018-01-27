App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    //console.log("Financials: ", responseFromChannel.users_stock.financials.financials);

    this.renderBalanceSheet(responseFromChannel);
    return;
  },
  renderBalanceSheet: function(responseFromChannel) {

    let data = responseFromChannel.users_stock.financials.financials;

      // Balance sheet starts here

      let currAssets = document.getElementById('curr_ass');
      let totalAssets = document.getElementById('tot_ass');
      let totalLiablity = document.getElementById('tot_liab');
      let currCash = document.getElementById('curr_cash');
      let currDebt = document.getElementById('curr_debt');
      let totCash = document.getElementById('tot_cash');
      let totDebt = document.getElementById('tot_debt');
      let shareEq = document.getElementById('share_eq');
      let cashChange = document.getElementById('cash_change');
      let cashFlow = document.getElementById('cash_flow');
      let opGainLoss = document.getElementById('op_gainloss');



      for(let i=0; i<data.length; i++){

        if(data[i].currentAssets < 0){
          currAssets.children[i+1].innerHTML =  "<span class='text-danger'>" + (data[i].currentAssets / 1000).toLocaleString() + "</span>";
        } else {
          currAssets.children[i+1].innerHTML =  "<span class='text-success'>" + (data[i].currentAssets / 1000).toLocaleString() + "</span>";
        }

        currAssets.children[i+1].innerHTML = (data[i].currentAssets / 1000).toLocaleString();

        totalAssets.children[i+1].innerHTML = (data[i].totalAssets / 1000).toLocaleString();

        totalLiablity.children[i+1].innerHTML = (data[i].totalLiabilities / 1000).toLocaleString();

        currCash.children[i+1].innerHTML = (data[i].currentCash / 1000).toLocaleString();

        currDebt.children[i+1].innerHTML = (data[i].currentDebt / 1000).toLocaleString();

        totCash.children[i+1].innerHTML = (data[i].totalCash / 1000).toLocaleString();

        totDebt.children[i+1].innerHTML = (data[i].totalDebt / 1000).toLocaleString();

        shareEq.children[i+1].innerHTML = (data[i].shareholderEquity / 1000).toLocaleString();

        cashChange.children[i+1].innerHTML = (data[i].cashChange / 1000).toLocaleString();

        cashFlow.children[i+1].innerHTML = (data[i].cashFlow / 1000).toLocaleString();

        opGainLoss.children[i+1].innerHTML = (data[i].operatingGainsLosses / 1000).toLocaleString();

      }
  }
});
