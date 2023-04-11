document.addEventListener("DOMContentLoaded", function () {
    var aTags = document.getElementsByClassName("aHoverable");
    console.log(aTags);
    for (var i = 0; i < aTags.length; i++) {
        (function (i) { // create new scope with current i value
            setTimeout(function () {
                aTags[i].classList.add("borderInBefore") // set opacity back to 1
                console.log(aTags[i])
            }, 310);
        })(i); // pass in current i value
    }
});

// Wait for a few seconds before resetting the opacity