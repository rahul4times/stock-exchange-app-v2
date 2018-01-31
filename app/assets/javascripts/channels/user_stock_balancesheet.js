App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    //console.log("Financials: ", responseFromChannel.users_stock);

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

        if(data[i].currentAssets > 0){
          currAssets.children[i+1].className =  "text-right text-success";
        } else if(data[i].currentAssets < 0){
          currAssets.children[i+1].className =  "text-right text-danger";
        } else{
          currAssets.children[i+1].className =  "text-right";
        }
        currAssets.children[i+1].innerHTML = (data[i].currentAssets / 1000).toLocaleString();

        if(data[i].totalAssets > 0){
          totalAssets.children[i+1].className =  "text-right text-success";
        } else if(data[i].totalAssets < 0){
          totalAssets.children[i+1].className =  "text-right text-danger";
        } else{
          totalAssets.children[i+1].className =  "text-right";
        }
        totalAssets.children[i+1].innerHTML = (data[i].totalAssets / 1000).toLocaleString();

        if(data[i].totalLiabilities > 0){
          totalLiablity.children[i+1].className =  "text-right text-success";
        } else if(data[i].totalLiabilities < 0){
          totalLiablity.children[i+1].className =  "text-right text-danger";
        } else{
          totalLiablity.children[i+1].className =  "text-right";
        }
        totalLiablity.children[i+1].innerHTML = (data[i].totalLiabilities / 1000).toLocaleString();

        if(data[i].currentCash > 0){
          currCash.children[i+1].className =  "text-right text-success";
        } else if(data[i].currentCash < 0){
          currCash.children[i+1].className =  "text-right text-danger";
        } else{
          currCash.children[i+1].className =  "text-right";
        }
        currCash.children[i+1].innerHTML = (data[i].currentCash / 1000).toLocaleString();

        if(data[i].currentDebt > 0){
          currDebt.children[i+1].className =  "text-right text-success";
        } else if(data[i].currentDebt < 0){
          currDebt.children[i+1].className =  "text-right text-danger";
        } else {
          currDebt.children[i+1].className =  "text-right";
        }
        currDebt.children[i+1].innerHTML = (data[i].currentDebt / 1000).toLocaleString();

        if(data[i].totalCash > 0){
          totCash.children[i+1].className =  "text-right text-success";
        } else if(data[i].totalCash < 0){
          totCash.children[i+1].className =  "text-right text-danger";
        } else {
          totCash.children[i+1].className =  "text-right";
        }
        totCash.children[i+1].innerHTML = (data[i].totalCash / 1000).toLocaleString();

        if(data[i].totalDebt > 0){
          totDebt.children[i+1].className =  "text-right text-success";
        } else if(data[i].totalDebt < 0){
          totDebt.children[i+1].className =  "text-right text-danger";
        } else {
          totDebt.children[i+1].className =  "text-right";
        }
        totDebt.children[i+1].innerHTML = (data[i].totalDebt / 1000).toLocaleString();

        if(data[i].shareholderEquity > 0){
          shareEq.children[i+1].className =  "text-right text-success";
        } else if(data[i].shareholderEquity < 0){
          shareEq.children[i+1].className =  "text-right text-danger";
        } else {
          shareEq.children[i+1].className =  "text-right";
        }
        shareEq.children[i+1].innerHTML = (data[i].shareholderEquity / 1000).toLocaleString();

        if(data[i].cashChange > 0){
          cashChange.children[i+1].className =  "text-right text-success";
        } else if(data[i].cashChange < 0){
          cashChange.children[i+1].className =  "text-right text-danger";
        } else {
          cashChange.children[i+1].className =  "text-right";
        }
        cashChange.children[i+1].innerHTML = (data[i].cashChange / 1000).toLocaleString();

        if(data[i].cashFlow > 0){
          cashFlow.children[i+1].className =  "text-right text-success";
        } else if(data[i].cashFlow < 0){
          cashFlow.children[i+1].className =  "text-right text-danger";
        } else {
          cashFlow.children[i+1].className =  "text-right";
        }
        cashFlow.children[i+1].innerHTML = (data[i].cashFlow / 1000).toLocaleString();

        if(data[i].operatingGainsLosses > 0){
          opGainLoss.children[i+1].className =  "text-right text-success";
        } else if(data[i].operatingGainsLosses < 0){
          opGainLoss.children[i+1].className =  "text-right text-danger";
        } else {
          opGainLoss.children[i+1].className =  "text-right";
        }
        opGainLoss.children[i+1].innerHTML = (data[i].operatingGainsLosses / 1000).toLocaleString();

      }
  }
});
