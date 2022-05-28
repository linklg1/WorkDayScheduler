$(document).ready(function () {
    
    // sets current date
let today = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(today);
let currentHour = moment().format("HH");
console.log(currentHour)

    
   // compares current time with schedule and colors accorindingly

    var timeDiv = document.querySelectorAll(".time-div")

    timeDiv.forEach(item=>{

        let time = item.id
        if (currentHour == time) {
                 item.classList.add("present");    
                } else if (currentHour < time) {
                  item.classList.remove("present");
                  item.classList.add("future");
                } else if (currentHour > time) {
                  item.classList.remove("future");
                  item.classList.add("past");
                }
    })



//saves and retrives items to and from local storage
let data = []

timeDiv.forEach(item=>{
   item.addEventListener("submit", (e)=>{
       e.preventDefault()
      
       data.push(item.description.value)

       console.log(data)
       localStorage.setItem("data", JSON.stringify(data))
   })
})

let retrieved = JSON.parse(localStorage.getItem("data"))
console.log(retrieved)
document.querySelectorAll(".description").forEach((item, i)=>{
   if(retrieved[i]){
       item.value = retrieved[i]
   }else{
       item.value = ""
   }
})




});






























