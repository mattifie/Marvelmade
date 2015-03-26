// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var ctx = document.getElementById("TotalDonations").getContext("2d");
var myNewChart = new Chart(ctx[1]).Doughnut(data,options);

var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]

//Get context with jQuery - using jQuery's .get() method.
var TotalDonations = $("#TotalDonations").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myNewChart = new Chart(TotalDonations).Doughnut(TotalDonations, chartOptions);
