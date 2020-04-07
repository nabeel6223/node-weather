$("ul").on("click","li",function() {
  $(this).toggleClass("registered");
});
$("ul").on("click","span",function(event) {
  $(this).parent().fadeOut(600,function () {
     $(this).remove();
  });
  event.stopPropagation();
});
$("input").keypress(function(event) {
  if(event.which==13){
    var text=$(this).val();
    $("ul").append("<li><span><i class='fas fa-trash-restore'></i></span>" + text + "</li>");
  }
});
/* $( "span" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
}); */
