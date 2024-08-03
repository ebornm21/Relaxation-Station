$("#default-mode").click(function () {
    $("body").css("background-color", "lightcyan");
    console.log("default-mode");
})

$("#neon-mode").click(function () {
    var element = document.body,
    style = window.getComputedStyle(element),
    top = style.getPropertyValue('background-color');
    top = style.setProperty('background-color', 'black');
    console.log(top);
    console.log("neon-mode");
})