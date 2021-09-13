// displays date in the header inside if <p>
// with an id of currentDay
$("#currentDay").text(
    // moment.js current date and formatting
    `${moment().format("dddd, MMM Do YYYY")}`
);



$(".row").on('click', '#task-text', function() {
    console.log('test');
});