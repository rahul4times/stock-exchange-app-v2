window.onload = () => {
  let arrOfTimes = []
  var counter = 0;
  //console.log("initializing the counter at "+counter);
  fetch(`https://api.iextrading.com/1.0/stock/aapl/chart/date/20180129`)
    .then(response => response.json())
    .then(data => {
      data.forEach(dataPoint => {
        arrOfTimes.push(dataPoint.label)
      })

      var ctx = document.getElementById("myChart").getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: arrOfTimes,
              datasets: [{
                  label: 'Price',
                  data: [],
                  fill: false,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      });
      App.cable.subscriptions.create('StockChannel', {
        received: function(data) {
          let responseFromChannel = data;

          console.log("Chart Data: ", responseFromChannel);
          var chartLength = data.chart.length;

          function addData(chart, label, data) {
            if(chart.data.datasets[0].data.length === 0) {
              chart.data.datasets.forEach((dataset) => {

                for(let i=0; i<chartLength; i++){
                  dataset.data.push(data.chart[i].average);
                  console.log('updated data', data);

                }

              });
            } else {
              chart.data.datasets[0].data.push(data.chart[data.chart.length - 1].average);
            }

            chart.update();

          }

          if(counter >= 60){
            //addData(myChart, null, data.chart[data.chart.length-1].average);
            addData(myChart, null, data);
            counter = 0;
            //console.log("milestone");
          } else {
            //console.log("counter is now at "+counter);
            counter +=3;
          }
        }
      });
    })
};
