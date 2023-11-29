const usuarios = [
    { usuario: "user1@gmail.com", contraseña: "Clave123" },
    { usuario: "user2@gmail.com", contraseña: "Clave456" },
    { usuario: "user3@gmail.com", contraseña: "Clave678" }
  ];
  let mensaje;
  let usuario;
  let contraseña;
  
  function validar(event) {
    event.preventDefault();
    
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    mensaje = document.getElementById("warnings");
    return new Promise((resolve, reject) => {
      if(( validarUsuario() === true) && (validarLongitud() === true) && (validarMayMin() === true) &&
      (validarNumeros() === true) && (validarIngreso()=== true)){
        setTimeout(() => {
          resolve();
        }, 2000);
      }
    })
    .then(() => {
      window.location.href = 'lista.html';
    })
    .catch((error) => {
      alert(error);
    });
  }
  
  function validarUsuario(){
    const eval = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(eval.test(usuario) == false){
      mensaje.innerHTML = "No es un usuario valido";
    }else{
      return true;
    }
  }
  
  function validarLongitud(){
    if(contraseña.length < 8 )
      mensaje.innerHTML = "La contraseña debe tener minimo 8 caracteres";
    else
      return true;
  }
  
  function validarNumeros(){
    const eval = /\d{2,}/;
    if (eval.test(contraseña) == false)
      mensaje.innerHTML = "La contraseña debe tener por lo menos 2 numeros";
    else
      return true;
  }
  function validarIngreso(){
    for (let i = 0; i < usuarios.length; i++) {
      if(usuario === usuarios[i].usuario && contraseña === usuarios[i].contraseña)
        return true;
      else
        mensaje.innerHTML = "El usuario o la contraseña no coinciden";
    }
  }
  
  function validarMayMin(){
    let evaluarMay = /[A-Z]/.test(contraseña);
    let evaluarMin = /[a-z]/.test(contraseña);
  
    if (evaluarMay && evaluarMin) 
      return true; 
    else 
      mensaje.innerHTML = "La contraseña debe tener al menos una mayuscula y una minuscula";
  }
  
  function limpiar() {
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
    document.getElementById('warnings').innerHTML = "";
  }
  