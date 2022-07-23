var index = 1;
changeImage = function() {
    var imgs = ["/assets/img/1.png", "/assets/img/2.png"];
    document.getElementById("slide-show").src = imgs[index];
    index++;
    if (index == 3) {
        index = 0;
    }
};
setInterval(changeImage, 1000);