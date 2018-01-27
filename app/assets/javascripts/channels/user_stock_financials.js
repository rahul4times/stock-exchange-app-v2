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
    let resDev = document.getElementById('res_dev');
    let opExp = document.getElementById('op_ex');

    for(let i=0; i<data.length; i++){
      gProfit.children[i+1].innerHTML = (data[i].grossProfit / 1000).toLocaleString();
      costRev.children[i+1].innerHTML = (data[i].costOfRevenue / 1000).toLocaleString();
      opRev.children[i+1].innerHTML = (data[i].operatingRevenue / 1000).toLocaleString();
      opInc.children[i+1].innerHTML = (data[i].operatingIncome / 1000).toLocaleString();
      resDev.children[i+1].innerHTML = (data[i].researchAndDevelopment / 1000).toLocaleString();
      opExp.children[i+1].innerHTML = (data[i].operatingExpense / 1000).toLocaleString();

    }
  }
});
