var now = moment();
console.log(now.hour(20));

var currentHour = now.format("hA");
console.log(currentHour);

// Load tasks from localStorage
// Render the tasks in the grid => renderTasks()
// get the current hour
// compare to time slots on schedule
// for each hour, check to see if the current hour is < = or >
// if (timeSlot < currentHour) {addClass("past")}
// if (timeSlot === currentHour) {addClass("current")}
// if (timeSlot > currentHour) {addClass("future")}
// when field has focus make text input and back to text field when out of focus
// save task to localStorage
// update the view => renderTasks()

var thisHour = $('.am-9').text().trim(); // use data-* and dataset.*
console.log(thisHour);
$('.am-9').next().addClass('present'); // add present class to the next sibling

var child = $('.row:first-child div:first-child').text().trim();

console.log(child);



/*
$('.row').each(function(i){
   var child = this.first();
   if (child.dataset.hour < now.format(H)){
       this.next().addClass('past');
   }
});
*/