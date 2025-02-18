// Inicializa EmailJS con tu User ID
emailjs.init("SIKi_a4USsG6KfB--"); 

// Escucha el evento de envío del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío tradicional del formulario

  // Envía los datos del formulario usando EmailJS
  emailjs.sendForm("service_2dwqftj", "template_wwehsfd", this)
    .then(function(response) {
      alert("¡Mensaje enviado con éxito!");
    }, function(error) {
      alert("Error al enviar el mensaje: " + error.text);
    });
});
