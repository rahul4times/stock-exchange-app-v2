App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    console.log("Financials: ", responseFromChannel.users_stock.financials.financials);

    this.renderBalanceSheet(responseFromChannel);
    return;
  },
  renderBalanceSheet: function(responseFromChannel) {

    let data = responseFromChannel.users_stock.financials.financials;

      // Balance sheet starts here
      let balanceSheet = document.getElementById('balance_sheet');

      let currAssets = document.getElementById('curr_ass');
      let totalAssets = document.getElementById('tot_ass');
      for(let i=0; i<data.length; i++){

        //let currAssetsData = document.createElement('td');
        // let totalAssetsData = document.createElement('td');
        // let totalLiablity = document.getElementById('tot_liab');
        // let totalLiablityData = document.createElement('td');
        // let currCash = document.getElementById('curr_cash');
        // let currCashData = document.createElement('td');
        // let currDebt = document.getElementById('curr_debt');
        // let currDebtData = document.createElement('td');
        // let totCash = document.getElementById('tot_cash');
        // let totCashData = document.createElement('td');
        // let totDebt = document.getElementById('tot_debt');
        // let totDebtData = document.createElement('td');
        // let shareEq = document.getElementById('share_eq');
        // let shareEqData = document.createElement('td');
        currAssets.children[i+1].innerHTML = (data[i].currentAssets / 1000).toLocaleString();
        totalAssets.children[i+1].innerHTML = (data[i].totalAssets / 1000).toLocaleString();
        // currAssetsData.innerHTML = (data[i].currentAssets / 1000).toLocaleString();
        // currAssets.appendChild(currAssetsData);

        // totalAssetsData.innerHTML = (data[i].totalAssets / 1000).toLocaleString();
        // totalAssets.appendChild(totalAssetsData);
        //
        // totalLiablityData.innerHTML = (data[i].totalLiabilities / 1000).toLocaleString();
        // totalLiablity.appendChild(totalLiablityData);
        //
        // currCashData.innerHTML = (data[i].currentCash / 1000).toLocaleString();
        // currCash.appendChild(currCashData);
        //
        // currDebtData.innerHTML = (data[i].currentDebt / 1000).toLocaleString();
        // currDebt.appendChild(currDebtData);
        //
        // totCashData.innerHTML = (data[i].totalCash / 1000).toLocaleString();
        // totCash.appendChild(totCashData);
        //
        // totDebtData.innerHTML = (data[i].totalDebt / 1000).toLocaleString();
        // totDebt.appendChild(totDebtData);
        //
        // shareEqData.innerHTML = (data[i].shareholderEquity / 1000).toLocaleString();
        // shareEq.appendChild(shareEqData);
      }

  }
});
