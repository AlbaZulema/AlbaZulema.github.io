<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = htmlspecialchars($_POST["nombre"]);
  $email = htmlspecialchars($_POST["email"]);
  $mensaje = htmlspecialchars($_POST["mensaje"]);

  $para = "azul.062903@gmail.com"; // ← Reemplaza esto con tu email real
  $asunto = "Nuevo mensaje de contacto desde Studio Zule";

  $contenido = "Nombre: $nombre\n";
  $contenido .= "Correo: $email\n";
  $contenido .= "Mensaje:\n$mensaje\n";

  $cabeceras = "From: $email";

  // Enviar el correo
  if (mail($para, $asunto, $contenido, $cabeceras)) {
    header("Location: gracias.html");
    exit();
  } else {
    echo "Hubo un error al enviar el mensaje.";
  }
}
?>
