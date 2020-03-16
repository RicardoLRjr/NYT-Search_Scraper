
$(document).ready(function() {

    var today = moment.now().format("YYYYMMDD");
    var beginDate, endDate;

    dataObject = {
        "api-key": "unoOYsH6b5BnSh8amNDBbNKY1K7xZc72",
        end_date: endDate || today
        q: "election",
        begin_date: "20170101"
    };

    $("#form").on("submit", function() {
        // gather the input from the input fields
        // and load them into our data object
        // dataObject.begin_date: = $("#begin-date").val()
    });

    $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        method: "GET",
        data: dataObject
        // data: {
        //     q: "election",
        //     // fr: "The New York Times" // i don't *think* this is necessary
        //     "api-key": "unoOYsH6b5BnSh8amNDBbNKY1K7xZc72",
        //     begin_date: "20100101",
        //     end_date: "20200316"
        // }
    }).then(function(response) {
        console.log(response);
    });


});