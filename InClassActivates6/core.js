// Select the button element by its ID
var button = document.getElementById("btn");

// Set initial values for timeout, level, and counter
var timeout = 500;
var level = 1;
var counter = 0;

// Function to randomize the button position
function randomizeButtonPosition() {
    // Generate random margin values for the button
    var marginTop = Math.random() * window.innerHeight;
    var marginLeft = Math.random() * window.innerWidth;

    // Set the button's margin values to the generated values
    button.style.marginTop = marginTop + "px";
    button.style.marginLeft = marginLeft + "px";
}

// Call the randomizeButtonPosition function at regular intervals using setInterval
setInterval(randomizeButtonPosition, timeout);

// Add an event listener to the button for clicks
button.addEventListener("click", function () {
    // Increment the counter for each click
    counter++;

    // Check if the player has clicked the button 3 times
    if (counter == 3) {
        // If so, alert the player that they have won the current level and reset the counter
        alert("You won level " + level + "!");
        counter = 0;

        // Decrease the timeout value by 100ms for the next level
        timeout -= 100;
        if (timeout < 0) {
            timeout = 0;
        }

        // Increment the level value for the next level
        level++;
    }

    // If the player hasn't clicked the button 3 times yet, wait for the current timeout value before logging the counter value
    setTimeout(function () {
        if (counter < 3) {
            console.log("Counter is " + counter);
        } else {
            // If the player has clicked the button 3 times, decrease the timeout value by 100ms and log the new timeout value
            timeout -= 100;
            console.log("Timeout decreased " + timeout + " ms");
            if (timeout < 0) {
                timeout = 0;
            }
        }
    }, timeout);
});
