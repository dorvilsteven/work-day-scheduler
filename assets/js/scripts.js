var auditTimeBlock = function(timeBlockEl) {
    $(timeBlockEl).removeClass("past present future");
    if (parseInt($(timeBlockEl).attr('data-time-stamp')) === parseInt(moment().format('h'))) {
        $(timeBlockEl).addClass('present');
    } else if (parseInt($(timeBlockEl).attr('data-time-stamp')) < parseInt(moment().format('h'))) {
        $(timeBlockEl).addClass('past');
    } else if (parseInt($(timeBlockEl).attr('data-time-stamp')) > parseInt(moment().format('h'))) {
        $(timeBlockEl).addClass('future');
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
        if (parseInt(moment().format('h')) > 5) {
            // if the work day is over dont run the audit
            return false;
        } else {
            // if the work day is active, 
            // run the audit
            auditTimeBlock(el); 
        } 
    });
}, ((1000 * 60) * 60));