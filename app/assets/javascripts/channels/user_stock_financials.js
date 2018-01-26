App.cable.subscriptions.create('StockChannel', {
  received: function(data) {
    let responseFromChannel = data;

    console.log("Financials: ", responseFromChannel.users_stock.financials.financials);

    this.renderUserStockNews(responseFromChannel);
    return;
  },
  renderUserStockNews: function(responseFromChannel) {

    let data = responseFromChannel.users_stock.financials.financials;

    let incomeStmtHead = document.getElementById('income_statement_head').children[0];
    let incomeStmtBody = document.getElementById('income_statement_body').children[0];

      if(incomeStmtHead.children.length < 5) {
        for(let i=0; i<data.length; i++){
          let incomeStmtHeadData = document.createElement('th');
          let incomeStmtBodyData = document.createElement('td');
          incomeStmtHeadData.innerHTML = data[i].reportDate;
          incomeStmtBodyData.innerHTML = (data[i].grossProfit / 1000).toLocaleString();

          incomeStmtHead.appendChild(incomeStmtHeadData);
          incomeStmtBody.appendChild(incomeStmtBodyData);
        }
      }
  },
  profitLossColor: function(totalAmount){
    
  }
});
