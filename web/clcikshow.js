var click = document.querySelector(".load-more");
click.onclick = function() {
    document.querySelector(".load-more").style.display = "none";
    document.querySelector(".load-more-1").style.display = "block";
};