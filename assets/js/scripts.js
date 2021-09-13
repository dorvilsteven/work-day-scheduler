$("#currentDay").text(
    `${moment().format("dddd, MMM Do YYYY")}`
);

$(".row").on('click', '#task-text', function() {
    console.log('test');
});