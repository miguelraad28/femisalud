document.addEventListener("DOMContentLoaded", function () {
    var aTags = document.getElementsByClassName("aHoverable");
    for (var i = 0; i < aTags.length; i++) {
        (function (i) {
            setTimeout(function () {
                aTags[i].classList.add("beforeAndAfterInNavbar")
            }, 310);
        })(i);
    }
});