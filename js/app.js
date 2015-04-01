// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Doughnut Chart for Weekly Goals
var TotalDonations = [
  {
    value: 1122,
    color:"#a7dbd8"
  },
  {
    value : 4378,
    color : "#E2EAE9"
  }
]
var options = {
  percentageInnerCutout : 60
};
var ToDate = $("#TotalDonations").get(0).getContext("2d");
var myTotalDonations = new Chart(ToDate).Doughnut(TotalDonations, options);



