
var texto = $('#texto-input');

$("#add-div").click(function(){

    $(".to-do").append(`<p class="alert-info tarefa"> ${texto.val()} <spam class="fecha"> x </spam> `);
    texto.val(" ") ;

	atarefas = Array.from($('.tarefa'));
	
	atarefas.forEach(function(tarefa,index){
		tarefa.childNodes[1].addEventListener('click',function(){
			tarefa.remove();
		})
	})
	
});

	

	
	




