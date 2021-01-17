// get the current hour
var now = moment();
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


$('.save-btn').click(function(){
    var index =  $('.save-btn').index(this);
    console.log(index)
    // var taskText = $('.save-btn').prev().text;
    // tasks[index] = taskText;
});



var hourStatus =function(){
    $('.row').each(function(){
        var hour = $(this).find('.hour');
        hour.removeClass('past present future');
        if ($(this).data('hour') < now.format('H')) {
            hour.addClass('past');
        }  else if ($(this).data('hour') > now.format('H')) {
            hour.addClass('future');
        } else {
            hour.addClass('present');
        };
    });
};
        /*
        if ($(this).data('hour') < now.format('H')){
            $(this).next().removeClass('present future');
            $(this).next().addClass('past');
        } else if ($(this).data('hour') === now.format(H)){
            $(this).next().removeClass('past future');
            $(this).next().addClass('present');
        } else if ($(this).data('hour') > now.format(H)){
            $(this).next().removeClass('past present');
            $(this).next().addClass('future');
        } */




