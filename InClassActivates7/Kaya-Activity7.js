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

	var resultsDiv = $("results");
	resultsDiv.innerHTML = "<h2>Results</h2><br/>" +
		"Average score is " + average.toFixed(2) + "<br/>" +
		"Highest score is " + highest;
}

function displayScores() {
	var table = $("scores_table");
	table.innerHTML = "<h2>Scores</h2><br/>";

	for (var i = 0; i < names.length; i++) {
		var row = table.insertRow(i);
		var nameCell = row.insertCell(0);
		var scoreCell = row.insertCell(1);

		nameCell.textContent = names[i];
		scoreCell.textContent = scores[i];
	}
}

function addScore() {

	var givenName = $("name");
	var givenScore = $("score");
	var name = givenName.value.trim();
	var score = Number(givenScore.value);

	if (score < 0 || score > 100 || name === "" || isNaN(score)) {
		alert("You must enter a name and a valid score");
	} else {
		names.push(name);
		scores.push(score);

		givenName.value = "";
		givenScore.value = "";
		givenName.focus();
	}
}
