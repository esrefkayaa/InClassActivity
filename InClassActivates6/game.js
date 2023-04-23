var button = document.getElementById("btn");
var timeout = 500;
var level = 1;
var counter = 0;
var intervalID = setInterval(randomizeButtonPosition, timeout);

function randomizeButtonPosition() {
    var marginTop = Math.random() * (window.innerHeight - button.offsetHeight);
    var marginLeft = Math.random() * (window.innerWidth - button.offsetWidth);
    button.style.marginTop = marginTop + "px";
    button.style.marginLeft = marginLeft + "px";
}

button.addEventListener("click", function () {
    counter++;
    if (counter === 3) {
        alert("You won level " + level + "!");
        counter = 0;
        level++;
        timeout -= 100;
        if (timeout < 0) {
            timeout = 0;
        }
        clearInterval(intervalID);
        intervalID = setInterval(randomizeButtonPosition, timeout);
    }
    var delay = timeout;
    if (timeout > 0) {
        delay += (level - 1) * (-100);
    }
    setTimeout(function () {
        if (counter < 3) {
            console.log("Counter is " + counter);
        }
    }, delay);
});