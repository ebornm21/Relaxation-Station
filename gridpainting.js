var currentColor =  "colored-plum";

$("#palette td").click(function(event) {
    currentColor = event.currentTarget.className;
    console.log(currentColor);
})

$("#grid td").hover(function(event) {
    var pixel = event.currentTarget;
    $(pixel).addClass(currentColor + "-opaque");
}, function(event) {
    var pixel = event.currentTarget;
    $(pixel).removeClass(currentColor + "-opaque");
})

$("#grid td").click(function (event) {
    var pixel = event.currentTarget;
    $(pixel).removeClass();
    $(pixel).addClass(currentColor);
})

$("#reset").click(function () {
    $("#grid td").removeClass();
})
