// Eastern Time Clock Starts Here
function convertToServerTimeZone() {
  //EST
  offset = -5.0
  //offset = -5.0  // Day light saving time
  clientDate = new Date();
  utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
  serverDate = new Date(utc + (3600000 * offset));

  document.getElementById("market").innerHTML = serverDate.toDateString() + " | " + serverDate.toLocaleTimeString();

  if ((clientDate.getHours() > 6 && clientDate.getHours() < 13) &&
        (clientDate.getDay() > 1 && clientDate.getDay() < 6)) {
    document.getElementById('date_time').innerHTML = 'Market is open ' + ' <span class="text-success"><small><i class="fa fa-circle" aria-hidden="true"></i></small></span>';
  }
  else {
    document.getElementById('date_time').innerHTML = 'Market is closed ' + ' <span class="text-danger"><small><i class="fa fa-circle" aria-hidden="true"></i></small></span>';
  }
}

setInterval(convertToServerTimeZone, 1000);
