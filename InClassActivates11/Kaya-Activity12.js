$(document).ready(function () {

    // Event handler for navigation links
    $("#nav_list li a").click(function (e) {

        e.preventDefault();

        //Load json data
        $.getJSON("json_files/" + $(this).attr("title") + ".json", function (data) {

            //I clear previous content
            $("main").empty();

            //selecting first speaker
            var speaker = data.speakers[0];

            // I added new content to the selected main element.
            $("main")
                .append(
                    $("<h1>").text(speaker.title),
                    $("<img>").attr("src", speaker.image),
                    $("<h2>").html(speaker.month + "<br>" + speaker.speaker),
                    $("<p>").text(speaker.text)
                );
        })
    });
}); // end ready