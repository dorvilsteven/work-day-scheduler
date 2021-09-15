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
    console.log('test');
});

$(".row").on('click', 'i', function() {
    console.log('save');
});

// function runs every hour to see if timeblock is in
// past, present or future, and updates accordingly
setInterval(function() {
    $('.time-block').each(function(index, el) {
<<<<<<< HEAD
        if (parseInt(moment().format('h')) > 5) {
            // if the work day is over dont run the audit
            $(el).addClass('past');
        } else {
            // if the work day is active, 
            // run the audit
            auditTimeBlock(el); 
        } 
=======
        auditTimeBlock(el); 
>>>>>>> feature/time-blocks
    });
}, 1000);