var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("currentDay").textContent=today;
console.log()

var nineTime = localStorage.getItem("data-time0");
document.getElementById("task0").value = nineTime;

var nineTime = localStorage.getItem("data-time1");
document.getElementById("task1").value = nineTime;

var nineTime = localStorage.getItem("data-time2");
document.getElementById("task2").value = nineTime;

var nineTime = localStorage.getItem("data-time3");
document.getElementById("task3").value = nineTime;

var nineTime = localStorage.getItem("data-time4");
document.getElementById("task4").value = nineTime;

var nineTime = localStorage.getItem("data-time5");
document.getElementById("task5").value = nineTime;

var nineTime = localStorage.getItem("data-time6");
document.getElementById("task6").value = nineTime;

var nineTime = localStorage.getItem("data-time7");
document.getElementById("task7").value = nineTime;

var nineTime = localStorage.getItem("data-time8");
document.getElementById("task8").value = nineTime;


var currentTime = moment().hour();
console.log(currentTime)

for(i = 0; i < 9; i++) {
    var tag = document.getElementById("text-"+i).getAttribute("data-time");
    console.log(tag);
    if(tag < currentTime) {
        var hour = document.getElementById("text-"+i).classList.add("bg-danger");
    } else if(tag == currentTime) {
        var hour = document.getElementById("text-"+i).classList.add("bg-success");
    } else {
        var hour = document.getElementById("text-"+i).classList.add("bg-primary");
    }
}

document.getElementById("save-data0").addEventListener("click", function(){
    console.log("save-data0")
    var data = document.getElementById("task0").value;
    console.log(data);
    localStorage.setItem("data-time0",data);
  });
document.getElementById("save-data1").addEventListener("click", function(){
    console.log("save-data1")
    var data = document.getElementById("task1").value;
    console.log(data);
    localStorage.setItem("data-time1",data);
  });
  document.getElementById("save-data2").addEventListener("click", function(){
    console.log("save-data2")
    var data = document.getElementById("task2").value;
    console.log(data);
    localStorage.setItem("data-time2",data);
  });
  document.getElementById("save-data3").addEventListener("click", function(){
    console.log("save-data3")
    var data = document.getElementById("task3").value;
    console.log(data);
    localStorage.setItem("data-time3",data);
  });
  document.getElementById("save-data4").addEventListener("click", function(){
    console.log("save-data4")
    var data = document.getElementById("task4").value;
    console.log(data);
    localStorage.setItem("data-time4",data);
  });
  document.getElementById("save-data5").addEventListener("click", function(){
    console.log("save-data5")
    var data = document.getElementById("task5").value;
    console.log(data);
    localStorage.setItem("data-time5",data);
  });
document.getElementById("save-data6").addEventListener("click", function(){
  console.log("save-data6")
  var data = document.getElementById("task6").value;
  console.log(data);
  localStorage.setItem("data-time6",data);
});
document.getElementById("save-data7").addEventListener("click", function(){
    console.log("save-data7")
    var data = document.getElementById("task7").value;
    console.log(data);
    localStorage.setItem("data-time7",data);
  });
document.getElementById("save-data8").addEventListener("click", function(){
  console.log("save-data8")
  var data = document.getElementById("task8").value;
  console.log(data);
  localStorage.setItem("data-time8",data);
})



//display the current day at the top of the calendar
//each timeblock is color coded to indicate whether it is a past, present, or future event
//click into a timeblock to create an event
//click the save button for that timeblock to save changes
//the saved events persist after refreshing the page

// make a listener for each of the buttons and have it's own key in the local storage