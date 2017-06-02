var contador = 0;

var funcionAEjecutar = function () {
  // elemento traido a partir de id
  var $toDoForm = $("#toDoForm");
  // asignacion de evento a dicho elemento
  $toDoForm.submit(agregarPost);
  $("#message").keyup(validarContenido);
};

var agregarPost = function (e) {
  e.preventDefault();
  // Elementos traido a partir de su id
  var $contenedor = $("#posts");
  var $mensajeContenedor = $("#message");
  var $mensaje = $mensajeContenedor.val();

  // creacion de elementos
  var $postContenedor = $("<article />", { "class": "jumbotron" });
 	var $postCheck = $("<input type='checkbox' />");
	var $post = $("<label />");
  var $botonAgregar = $("#botonAgregarTarea");

  var identificador = "marcador-" + contador;

  // personalizacion de elementos creados
 	$postCheck.id = identificador;
  $postCheck.click(eliminarToDo);
  $post.attr("for", identificador);
	// $post.text($mensaje);

  // agregar al DOM
  $($contenedor).prepend($postContenedor);
  $($postContenedor).append($postCheck);
  $($postContenedor).append($post);
  $($post).append($mensaje);

  $($mensajeContenedor).val("");
  $($botonAgregar).attr("disabled", true);

  contador++;
};

var eliminarToDo = function () {
  var contenedor = this.parentElement;
  contenedor.remove();
 	$(this).parent().remove();
};

var validarContenido = function () {
  var $addButton = $("#botonAgregarTarea");
  // .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
  if($(this).val().trim().length > 0) {
  	$addButton.removeAttr("disabled");
    } else {
      $addButton.attr("disabled", true);
    }
};

$(document).ready(funcionAEjecutar);
