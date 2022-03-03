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


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $("#archivo").attr("src", e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function() {
    $("#nav-item-enlace").click(function() {
        $("#enlace").text($("#texto").val());
    });
});