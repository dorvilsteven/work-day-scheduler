var currentHour = parseInt(moment().format('h'));

var auditTimeBlock = function(timeBlockEl) {
    var timeBlock = $(timeBlockEl);
    var timeBlockData = parseInt(timeBlock.attr('data-time-stamp'));
    
    timeBlock.removeClass("past present future");

    if (currentHour <= 6) {
        currentHour += 12;
    }

    if (timeBlockData === currentHour) {
        timeBlock.addClass("present");
    } else if (currentHour <= 12 && currentHour > 6) {
        if (timeBlockData < currentHour) {
            timeBlock.addClass("past");
        } else {
            timeBlock.addClass("future");
        }
    } else if (currentHour > 12) {
        if (timeBlockData > currentHour) {
            timeBlock.addClass("future");    
        } else {
            timeBlock.addClass("past");
        }
    }
};
// displays date in the header inside if <p>
// with an id of currentDay
$("#currentDay").text(
    // moment.js current date and formatting
    `${moment().format("dddd, MMM Do")}`
);


$(".row").on('click', '#task-text', function() {
    // get text from p element
    var text = $(this).children().text().trim();
    var textInput = $("<textarea>").addClass("col-12").val(text);
    $(this).children().replaceWith(textInput);
    textInput.trigger("focus");
});

$(".row").on('click', 'i', function() {
    var taskContainer = $(this).parent().siblings('div#task-text');
    var taskText = taskContainer.children().val().trim();
    var taskP = $('<p>').addClass("col-12").text(taskText);

    taskContainer.children().replaceWith(taskP);

});

// function runs every hour to see if timeblock is in
// past, present or future, and updates accordingly
setInterval(function() {
    $('.time-block').each(function(index, el) {
            auditTimeBlock(el); 
    });
}, 1000);