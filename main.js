document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;
  
    if (!nombre || !mensaje || !correo.includes("@") || !correo.includes(".") || !correo.endsWith(".com")) {
      alert("Por favor, completa todos los campos y asegúrate de ingresar un correo válido.");
      event.preventDefault();
    } else {
      alert("¡Mensaje enviado con éxito!");
    }
  });