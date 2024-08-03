$("td").addClass("covered");

var pops = document.querySelectorAll("td");

for (i=0; i<pops.length; i++) {
    pops[i].id = i;
};

var popSound = new Audio("./media/pop.mp3")

$("td").click(function (event) {
    var pop = event.target.id;
    $("#" + pop).removeClass("covered");
    popSound.play();
});

$("#reset").click(function () {
    $("td").addClass("covered");
})