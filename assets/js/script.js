function recogerDatosComuniq(){
  
  var datosClienteComuniquemonos = {
    nombre: document.getElementById("inputNombreComuniquemonos").value,
    apellido: document.getElementById("inputApellidoComuniquemonos").value,
    email: document.getElementById("inputCorreoComuniquemonos").value,
    telefono: document.getElementById("inputFonoComuniquemonos").value,
    motivoTexto: document.getElementById("inputTextaComuniq").value,
  };
  
  if (datosClienteComuniquemonos.nombre == '' || datosClienteComuniquemonos.email == '' || datosClienteComuniquemonos.telefono == '' || datosClienteComuniquemonos.motivoTexto == '') {
    alert('Please fill out all fields in the form to ensure that I have all the necessary information to provide you with the best service. Thank you for your cooperation.');
  }else{
    alert("Thank you, " + datosClienteComuniquemonos.nombre + ". I will be in touch with you at the email address you provided as soon as possible.");
  }
}