var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	$("name").focus();
};

function displayResults() {
	var average = 0;
	var highest = 0;

	for (var i = 0; i < scores.length; i++) {
		average = (average * i + scores[i]) / (i + 1);
		if (scores[i] > highest) {
			highest = scores[i];
		}
	}
<<<<<<< HEAD
	var highestName = scores.indexOf(highest);
	$("results").innerHTML = "<h2>Results</h2><br/>" +
		"Average score = " + average + "<br > "
        	+ "High score = " + names[highestName] + " with a score of " + scores[highestName];
=======

	var highestName = scores.indexOf(highest);
	$("results").innerHTML = "<h2>Results</h2><br/>" +
		"Average score = " + average + "<br > "
		+ "High score = " + names[highestName] + " with a score of " + scores[highestName];
>>>>>>> 4d0dd28 (finished)
}

function displayScores() {
	var html = '<tr>' + '<td>' + '<b> Name </b>' + '</td>' + '<td>' + '<b> Score </b>' + '</td>' + '</tr>'

	for (let i = 0; i < names.length; i++) {
		html += '<tr>' + '<td>' + names[i] + '</td>' + '<td>' + scores[i] + '</td>' + '</tr>'
	}

	$("scores_table").innerHTML = "<h2>Scores</h2><br/>" + html;
}

function addScore() {
	var name = $("name").value.trim();
	var score = Number($("score").value);

	if (score < 0 || score > 100 || name === "" || isNaN(score)) {
		alert("You must enter a name and a valid score");
	} else {
		names.push(name);
		scores.push(score);
	}
}
