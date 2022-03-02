$(document).ready(function() {
    $("#nav-item-titulo").click(function() {
        $("#titulo").text($("#texto").val());
    });
});


$(document).ready(function() {
    $("#nav-item-parrafo").click(function() {
        $("#contenido").text($("#texto").val());
    });
});