document.addEventListener("DOMContentLoaded", function () {
    var aTags = document.getElementsByClassName("aHoverable");
    console.log(aTags);
    for (var i = 0; i < aTags.length; i++) {
        (function (i) {
            setTimeout(function () {
                aTags[i].classList.add("borderInBefore")
                console.log(aTags[i])
            }, 310);
        })(i);
    }
});