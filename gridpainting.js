$("td").click(function (event) {
    var pixel = event.currentTarget;
    $(pixel).addClass("colored");
})

$("#reset").click(function () {
    $("td").removeClass("colored");
})
