$(document).ready(function () {
    // sets current date
let today = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(today);


    //Assign saveBtn click listener
    $(“.saveBtn”).on(“click”, function (event) {
        event.preventDefault();
        console.log(this);
        var text = $(this).siblings(“.description”).val();
        var time = $(this).parent().attr(“id”);
        //set items in local storage.
        localStorage.setItem(time, text);
    })

    //load any saved data from LocalStorage - do this for each hour created.
    $(“#9th-hour .description”).val(localStorage.getItem(“hour9"));
    $(“#10th-hour .description”).val(localStorage.getItem(“hour10"));
    $(“#11th-hour .description”).val(localStorage.getItem(“hour11"));
    $(“#12th-hour .description”).val(localStorage.getItem(“hour12"));
    $(“#13th-hour .description”).val(localStorage.getItem(“hour13"));
    $(“#14th-hour .description”).val(localStorage.getItem(“hour14"));
    $(“#15th-hour .description”).val(localStorage.getItem(“hour15"));
    $(“#16th-hour .description”).val(localStorage.getItem(“hour16"));
    $(“#17th-hour .description”).val(localStorage.getItem(“hour17"));


    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();
        // loop over time blocks
        $(“.time-block”).each(function () {
            var blockHour = parseInt($(this).attr(“id”).split(“hour”)[1]);
            console.log( blockHour, currentHour)
            //check if we’ve moved past this time
            if (blockHour < currentHour) {
                $(this).addClass(“past”);
                $(this).removeClass(“future”);
                $(this).removeClass(“present”);
            }
            else if (blockHour === currentHour) {
                $(this).removeClass(“past”);
                $(this).addClass(“present”);
                $(this).removeClass(“future”);
            }
            else {
                $(this).removeClass(“present”);
                $(this).removeClass(“past”);
                $(this).addClass(“future”);
            }
        })
    }
    hourTracker();

});
































});