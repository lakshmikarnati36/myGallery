$(document).ready(function() {
  $("body").on("click", "#galleryList", function(event) {
    var targetId = event.target.id;
    var src = $("#" + targetId).attr("src");
    $("#contentImge").attr("src", src);
  });
});
