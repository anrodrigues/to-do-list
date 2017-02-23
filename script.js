
var id = 0;
var texto = $('#texto-input');

$("#add-div").click(function(){
  id = id += 1;
  $(".to-do").append('<p class="alert-info tarefa">' + id +' - '+ texto.val());
  texto.val(" ") ;
});



