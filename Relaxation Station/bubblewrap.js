$("td").addClass("covered");

var pops = document.querySelectorAll("td");

for (i=0; i<pops.length; i++) {
    pops[i].id = i;
};

$("td").click(function (event) {
    var pop = event.target.id;
    $("#" + pop).removeClass("covered");
});

$("#reset").click(function () {
    $("td").addClass("covered");
})