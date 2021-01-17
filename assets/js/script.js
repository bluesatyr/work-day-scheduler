// TODO:
// when field has focus make text input and back to text field when out of focus
// add more grid classes to make it responsive

// get the current hour
var now = moment();
var currentHour = now.format("hA");
console.log(currentHour);

// global tasks array
var tasks = ["task 1", "task 2", "task 3", "task 4", "task 5", "task 6", "task 7", "task 8", "task 9"];

// Load tasks from localStorage
var getTasks = function() {
    var loadedtasks = JSON.parse(localStorage.getItem('tasks'));
    return loadedtasks;
};

// render tasks to .hour elements in the DOM
var renderTasks = function() {
    $('.hour').each(function(i) {
        $(this).text(tasks[i]);
        console.log(this);
    });
};

// save current tasks to storage
var tasksToStorage =  function() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

$('.save-btn').click(function() {
    $('.hour').each(function(i){
        tasks[i] = $(this).text();
        console.log(tasks);
        tasksToStorage();
    })
});

/* save input task to global tasks array
var saveTasks = function() {
    $('.hour').each(function(i){
        tasks[i] = $(this).text();
        console.log(tasks);
        tasksToStorage();
    })
}
*/



 /*   
    function(){
    var index =  $('.save-btn').index(this);
    var taskText = $(this).prev().text();
    tasks[index] = taskText;
});
*/


// compare to time slots on schedule to current hour & set proper class
var hourStatus =function(){
    console.log('time check');
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

$( document ).ready(hourStatus);
var checkHour = setInterval(hourStatus, 60000);


