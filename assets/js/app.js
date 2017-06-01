var funcionAEjecutar = function () {
  // elemento traido a partir de id
  var $toDoForm = $("#toDoForm");
  // asignacion de evento a dicho elemento
  $toDoForm.submit(agregarPost);
};

var agregarPost = function (e) {
  e.preventDefault();
  // Elementos traido a partir de su id
  var $contenedor = $("#posts");
  var $mensajeContenedor = $("#message");
  var $mensaje = $mensajeContenedor.val();

  // creacion de elementos
  var $postContenedor = $("<article/>");
  var $post = $("<p/>");

  // personalizacion de elementos creados
  $postContenedor.addClass("jumbotron");

  // agregar al DOM
  $($contenedor).append($postContenedor);
  $($postContenedor).append($post);
  $($post).append($mensaje);

  $($mensajeContenedor).val("");
}

$(document).ready(funcionAEjecutar);
