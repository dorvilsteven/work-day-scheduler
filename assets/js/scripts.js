var currentHour = parseInt(moment().format("h"));

var auditTimeBlock = function(timeBlockEl) {
    var timeBlock = $(timeBlockEl);
    var timeBlockData = parseInt(timeBlock.attr('data-time-stamp'));
    
    timeBlock.removeClass("past present future");

    if (timeBlockData === currentHour) {
        timeBlock.addClass("present");
    } else if (currentHour < 6 ) {
        if (timeBlockData < currentHour || timeBlockData >= 9) {
            timeBlock.addClass("past");
        } else if (timeBlockData > currentHour) {
            timeBlock.addClass("future");
        }
    } else if (currentHour >=6) {
        timeBlock.addClass("past");
    }
};
// displays date in the header inside if <p>
// with an id of currentDay
$("#currentDay").text(
    // moment.js current date and formatting
    `${moment().format("dddd, MMM Do YYYY")}`
);


$(".row").on('click', '#task-text', function() {
    console.log('test');
});

$(".row").on('click', 'i', function() {
    console.log('save');
});

// function runs every hour to see if timeblock is in
// past, present or future, and updates accordingly
setInterval(function() {
    $('.time-block').each(function(index, el) {
        auditTimeBlock(el); 
    });
}, (1000 * 60 ) * 60);