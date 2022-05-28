$(document).ready(function () {
    // sets current date
let today = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(today);
let currentHour = moment().format("HH");

    
    $(".time-div").each(function () {
        var timeDiv = $(this).attr("id").split("-")[1];
        
        if (currentHour == timeDiv) {
          $(this).addClass("present");
          $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeDiv) {
          $(this).removeClass("present");
          $(this).addClass("future");
        } else if (currentHour > timeDiv) {
          $(this).removeClass("future");
          $(this).addClass("past");
        }
      });



//saves items to local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //retrieves items from local storage 
  $("9th-hour .time-block").val(localStorage.getItem("09"));
  $("#10th-hour .time-block").val(localStorage.getItem("10"));
  $("#11th-hour .time-block").val(localStorage.getItem("11"));
  $("#12th-hour .time-block").val(localStorage.getItem("12"));
  $("#13th-hour .time-block").val(localStorage.getItem("13"));
  $("#14th-hour .time-block").val(localStorage.getItem("14"));
  $("#15th-hour .time-block").val(localStorage.getItem("15"));
  $("#16th-hour .time-block").val(localStorage.getItem("16"));
  $("#17th-hour .time-block").val(localStorage.getItem("17"));

});






























