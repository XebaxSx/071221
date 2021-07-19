$(function(){
  $(".ninjaB").click(function(){
    $(".ninja").toggle();
  });
  $("#enviarCorreo").click(function(){
    alert ("El correo fue enviado correctamente...");
  });
  $(".coloreable").on("dblclick", function(){
    $(this).addClass("text-danger");
});
  });
