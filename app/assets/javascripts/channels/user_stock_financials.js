App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    //console.log("Financials: ", responseFromChannel.users_stock.financials.financials);

    this.renderIncomeStatement(responseFromChannel);
    return;
  },
  renderIncomeStatement: function(responseFromChannel) {

    let data = responseFromChannel.users_stock.financials.financials;

    let firstDateHeader = document.getElementById('first_date');
    firstDateHeader.innerHTML = data[0].reportDate;
    let secondDateHeader = document.getElementById('second_date');
    secondDateHeader.innerHTML = data[1].reportDate;
    let thirdDateHeader = document.getElementById('third_date');
    thirdDateHeader.innerHTML = data[2].reportDate;
    let fourthDateHeader = document.getElementById('fourth_date');
    fourthDateHeader.innerHTML = data[3].reportDate;

    // Income statement starts here
    let gProfit = document.getElementById('g_profit');
    let costRev = document.getElementById('cost_rev');
    let opRev = document.getElementById('op_rev');
    let opInc = document.getElementById('op_in');
    let netIncome = document.getElementById('net_in');
    let resDev = document.getElementById('res_dev');
    let opExp = document.getElementById('op_ex');

    for(let i=0; i<data.length; i++){

      if(data[i].grossProfit > 0){
        gProfit.children[i+1].className =  "text-right text-success";
      } else if(data[i].grossProfit < 0){
        gProfit.children[i+1].className =  "text-right text-danger";
      } else {
        gProfit.children[i+1].className =  "text-right";
      }
      gProfit.children[i+1].innerHTML = (data[i].grossProfit / 1000).toLocaleString();

      if(data[i].costOfRevenue > 0){
        costRev.children[i+1].className =  "text-right text-success";
      } else if(data[i].costOfRevenue < 0){
        costRev.children[i+1].className =  "text-right text-danger";
      } else {
        costRev.children[i+1].className =  "text-right";
      }
      costRev.children[i+1].innerHTML = (data[i].costOfRevenue / 1000).toLocaleString();

      if(data[i].operatingRevenue > 0){
        opRev.children[i+1].className =  "text-right text-success";
      } else if(data[i].operatingRevenue < 0){
        opRev.children[i+1].className =  "text-right text-danger";
      } else {
        opRev.children[i+1].className =  "text-right";
      }
      opRev.children[i+1].innerHTML = (data[i].operatingRevenue / 1000).toLocaleString();

      if(data[i].operatingIncome > 0){
        opInc.children[i+1].className =  "text-right text-success";
      } else if(data[i].operatingIncome < 0){
        opInc.children[i+1].className =  "text-right text-danger";
      } else {
        opInc.children[i+1].className =  "text-right";
      }
      opInc.children[i+1].innerHTML = (data[i].operatingIncome / 1000).toLocaleString();

      if(data[i].netIncome > 0){
        netIncome.children[i+1].className =  "text-right text-success";
      } else if (data[i].netIncome < 0){
        netIncome.children[i+1].className =  "text-right text-danger";
      } else{
        netIncome.children[i+1].className =  "text-right";
      }
      netIncome.children[i+1].innerHTML = (data[i].netIncome / 1000).toLocaleString();

      if(data[i].researchAndDevelopment > 0){
        resDev.children[i+1].className =  "text-right text-success";
      } else if(data[i].researchAndDevelopment < 0){
        resDev.children[i+1].className =  "text-right text-danger";
      } else {
        resDev.children[i+1].className =  "text-right";
      }
      resDev.children[i+1].innerHTML = (data[i].researchAndDevelopment / 1000).toLocaleString();

      if(data[i].operatingExpense > 0){
        opExp.children[i+1].className =  "text-right text-success";
      } else if(data[i].operatingExpense < 0){
        opExp.children[i+1].className =  "text-right text-danger";
      } else {
        opExp.children[i+1].className =  "text-right";
      }
      opExp.children[i+1].innerHTML = (data[i].operatingExpense / 1000).toLocaleString();

    }
  }
});
