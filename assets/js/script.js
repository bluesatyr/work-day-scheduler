// get the current hour
var now = moment();
console.log(now.hour(20));
var currentHour = now.format("hA");
console.log(currentHour);

var tasks = ["task 1", "task 2", "task 3", "task 4", "task 5", "task 6", "task 7", "task 8", "task 9"];

// Load tasks from localStorage
var getTasks = function() {
    var loadedtasks = JSON.parse(localStorage.getItem('tasks'));
    return loadedtasks;
};


var renderTasks = function() {
    $('.hour').each(function(i) {
        $(this).text(tasks[i]);
        console.log(this);
    });
};

// compare to time slots on schedule to current hour    
// if (timeSlot < currentHour) {addClass("past")}
// if (timeSlot === currentHour) {addClass("current")}
// if (timeSlot > currentHour) {addClass("future")}
// when field has focus make text input and back to text field when out of focus
// save task to localStorage
// update the view => renderTasks()
// add more grid classes to make it responsive

/* var thisHour = $('.am-9').text().trim(); // use data-* and dataset.*
console.log(thisHour); */

$('.am-9').next().addClass('present'); // add present class to the next sibling

var child = $('.row:first-child div:first-child').text().trim();

console.log(child);



$('.save-btn').click(function(){
    var index =  $('.save-btn').index(this);
    console.log(index)
    // var taskText = $('.save-btn').prev().text;
    // tasks[index] = taskText;
});



/*
$('.row').each(function(i){
   var child = this.first();
   if (child.dataset.hour < now.format(H)){
       this.next().addClass('past');
   }
});
*/