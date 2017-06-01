window.addEventListener("load", function() {

  var toDoForm = document.getElementById("toDoForm");
  toDoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // obtencion de datos
    var contenedor = document.getElementById("posts");
    var mensajeContenedor = document.getElementById("message");
    var mensaje = mensajeContenedor.value;

    // creacion de elementos
    var postContenedor = document.createElement("article");
    var post = document.createElement("p");

    // personalizacion de elementos creados
    postContenedor.className = "jumbotron";
		post.textContent = mensaje;

    // agregar al DOM
    postContenedor.appendChild(post);
    contenedor.appendChild(postContenedor);

    mensajeContenedor.value = "";
  })

})
