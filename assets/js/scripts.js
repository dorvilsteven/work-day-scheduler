// displays date in the header inside if <p>
// with an id of currentDay
$("#currentDay").text(
    // moment.js current date and formatting
    `${moment().format("dddd, MMM Do YYYY")}`
);


$(".row").on('click', '#task-text', function() {
    console.log('test');
});

// function runs every hour to see if timeblock is in
// past, present or future, and updates accordingly
// setInterval(function() {
//     $(".time-block").each(function() {

//     });
// }, (1000 * 60) * 60);