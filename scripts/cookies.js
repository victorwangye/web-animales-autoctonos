 // Mostrar el banner de cookies si no se ha aceptado ni rechazado
        window.onload = function() {
            if (!localStorage.getItem("cookies-accepted") && !localStorage.getItem("cookies-rejected")) {
                document.getElementById("cookie-banner").style.display = "block";
            }

            // Al hacer clic en el botón "Aceptar"
            document.getElementById("accept-cookies").onclick = function() {
                localStorage.setItem("cookies-accepted", "true");  // Guardar la preferencia
                document.getElementById("cookie-banner").style.display = "none";  // Ocultar el banner
            }

            // Al hacer clic en el botón "Rechazar"
            document.getElementById("reject-cookies").onclick = function() {
                localStorage.setItem("cookies-rejected", "true");  // Guardar preferencia de rechazo
                document.getElementById("cookie-banner").style.display = "none";  // Ocultar el banner
            }
        };