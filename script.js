$(document).ready(function() {


    // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

    $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        method: "GET",
        data: {
            q: "election",
            "api-key": "unoOYsH6b5BnSh8amNDBbNKY1K7xZc72"
        }
    }).then(function(response) {
        console.log(response);
    });


});