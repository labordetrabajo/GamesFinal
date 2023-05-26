function enviarFormulario(event) {
    event.preventDefault();
    const formulario = document.getElementById("contactForm");
    const datos = new FormData(formulario);
  
    fetch(formulario.action, {
      method: formulario.method,
      body: datos,
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error al enviar el formulario");
      }
    })
    .then(data => {
      console.log(data);
      alert("Gracias por contactarnos, su mensaje ha sido enviado correctamente");
      formulario.reset();
    })
    .catch(error => {
      console.error(error);
      alert("Ocurrió un error al enviar el formulario, inténtelo de nuevo más tarde");
    });
  }