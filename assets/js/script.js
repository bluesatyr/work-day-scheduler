// TODO:
// when field has focus make text input and back to text field when out of focus
// add more grid classes to make it responsive

// get the current hour
var now = moment();
var currentHour = now.format("hA");
console.log(currentHour);

// global tasks array
var tasks = ["", "", "", "", "", "", "", "", ""];

// render current date to the header
var currentDate = function () {
    var today = now.format('dddd, LL')
    $('#currentDay').text(today);
}


// render tasks to .hour elements in the DOM
var renderTasks = function() {
    $('.hour').each(function(i) {
        var text = tasks[i];
        var taskP = $("<p>")
            .text(text);
        $(this).append(taskP);
        console.log(this);
    });
};

// Load tasks from localStorage
var getTasks = function() {
    var loadedtasks = JSON.parse(localStorage.getItem('tasks'));
    if (loadedtasks) {
        tasks = loadedtasks;
        renderTasks();
    } else {
        renderTasks();
    }
    
};

// save current tasks to storage
var tasksToStorage =  function() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// when user clicks save button update tasks array and save to localStorage
$('.save-btn').click(function() {
    $('.hour').each(function(i){
        var taskP = $(this).find('p');
        tasks[i] = taskP.text().trim();
        console.log(tasks);
        tasksToStorage();
    })
});

// when task field gets focus/is clicked, turn into input area
$(".hour").on("click", function() {
    // get current task from p 
    var textP = $(this).find('p');
    var text = textP.text().trim();
    console.log(text);
    
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    
    textP.replaceWith(textInput);
    textInput.trigger("focus");
}); 

// on blur return to a paragraph element
$(".hour").on("blur", "textarea", function() {
    // get the textarea's current value/text
    var text = $(this)
        .val()
        .trim();
    
    
    // recreate p element
    var taskP = $("<p>")
        .text(text);
    
    // replace textarea with p element
    $(this).replaceWith(taskP);
    
});

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


$( document ).ready(currentDate);
$( document ).ready(hourStatus);
$( document ).ready(getTasks);
var checkHour = setInterval(hourStatus, 60000);


