App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    //console.log("Financials: ", responseFromChannel.users_stock.financials.financials);

    this.renderIncomeStatement(responseFromChannel);
    return;
  },
  renderIncomeStatement: function(responseFromChannel) {

    let data = responseFromChannel.users_stock.financials.financials;

    let incomeStmtHead = document.getElementById('income_statement_head').children[0];

    // Income statement starts here

      if(incomeStmtHead.children.length < 5) {
        for(let i=0; i<data.length; i++){
          let incomeStmtHeadData = document.createElement('th');
          let incomeStmtBodyData = document.createElement('td');
          incomeStmtHeadData.innerHTML = data[i].reportDate.replace(/-/gi, "/");

          let gProfit = document.getElementById('g_profit');
          let gProfitData = document.createElement('td');
          let costRev = document.getElementById('cost_rev');
          let costRevData = document.createElement('td');
          let opRev = document.getElementById('op_rev');
          let opRevData = document.createElement('td');
          let opInc = document.getElementById('op_in');
          let opIncData = document.createElement('td');
          let resDev = document.getElementById('res_dev');
          let resDevData = document.createElement('td');
          let opExp = document.getElementById('op_ex');
          let opExpData = document.createElement('td');

          gProfitData.innerHTML = (data[i].grossProfit / 1000).toLocaleString();
          gProfit.appendChild(gProfitData);

          costRevData.innerHTML = (data[i].costOfRevenue
            / 1000).toLocaleString();
          costRev.appendChild(costRevData);

          opRevData.innerHTML = (data[i].operatingRevenue
            / 1000).toLocaleString();
          opRev.appendChild(opRevData);

          opIncData.innerHTML = (data[i].operatingIncome
            / 1000).toLocaleString();
          opInc.appendChild(opIncData);

          resDevData.innerHTML = (data[i].researchAndDevelopment
            / 1000).toLocaleString();
          resDev.appendChild(resDevData);

          opExpData.innerHTML = (data[i].operatingExpense
            / 1000).toLocaleString();
          opExp.appendChild(opExpData);

          incomeStmtHead.appendChild(incomeStmtHeadData);

        }
      }
  }
});
