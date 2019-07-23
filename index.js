var game
// $enable-gradients;
$(document).ready(function() {
    console.log("ready!");
    $("li.list-group-item").click(hi);
    $("ul.days").click(hi2)
});
function hi() {
    $("li.list-group-item").removeClass("active");
    $(this).addClass("active");
}
function hi2() {
    $("li.pweb").removeClass("active");
    $(this).addClass("active")
}