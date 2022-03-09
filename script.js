$(document).ready(function () {
  var url =
    "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";

  $.getJSON(url, function (e) {
    console.log(e);
    var total_active, total_recovered, total_deaths, total_confirmed;

    var state = [];
    var recovered = [];
    var confirmed = [];
    var deaths = [];

    $.each(e.data.statewise, function (id, obj) {
      state.push(obj.state);
      confirmed.push(obj.confirmed);
      recovered.push(obj.recovered);
      deaths.push(obj.deaths);
    });
    console.log(state);

    total_active = e.data.total.active;
    total_confirmed = e.data.total.confirmed;
    total_deaths = e.data.total.deaths;
    total_recovered = e.data.total.recovered;

    $("#Aac").append(total_active);
    $("#Con").append(total_confirmed);
    $("#Rec").append(total_recovered);
    $("#Det").append(total_deaths);

    var myChart = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(myChart, {
      type: "bar",
      data: {
        labels: state,
        datasets: [
          {
            label: "Confirmed Cases",
            data: confirmed,
            fill: false,
            borderColor: "#FFF",
            backgroundcolor: "#FFF",
            borderWidth: 5,
          },
          {
            label: "Recovered",
            data: recovered,
            fill: false,
            borderColor: "#009688",
            backgroundcolor: "#009688",
            borderWidth: 5,
          },
          {
            label: "Deaths",
            data: deaths,
            fill: false,
            borderColor: "#f44336",
            backgroundcolor: "#f44336",
            borderWidth: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  });
});
