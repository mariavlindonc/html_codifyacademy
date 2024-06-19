function validar()
{
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    
    if (usuario == "guillesanchez" && clave == "4750")
    {
        window.location.href = "./main.html";      
    } 
    else 
    {
        alert("Usuario y clave incorrectos.");
    }
}

function limpiar()
{
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
}

function inscribir() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("edad").value = "";
    document.querySelector('input[name="plan"]:checked').value;
    document.getElementById("curso").value = "";
  
    document.getElementById("resultado").textContent = "¡Inscripción Exitosa!";
  }
  
  function duracion() {
    var v1 = document.getElementById("marca").value;
    var v2 = document.getElementById("modelo").value;
  
    if (v1 == 1 && v2 == 1) {
      document.getElementById("resultado2").textContent =
        "EL PRECIO ES 12.000.000 DE PESOS";
    }
  
    if (v1 == 1 && v2 == 2) {
      document.getElementById("resultado2").textContent =
        "EL PRECIO ES 10.000.000 DE PESOS";
    }
  
    if (v1 == 1 && v2 == 3) {
      document.getElementById("resultado2").textContent =
        "EL PRECIO ES 11.000.000 DE PESOS";
    }
  }
  
  function metodo() {
    var op = document.querySelector('input[name="plan"]:checked').value;
    var costo = 7000;
  
    if (op == 'por_curso') {
      costo += 7000 * 0.05;
    }
  
    if (op == 'mensual') {
      costo = 7000;
    }
  
    if (op == 'anual') {
      costo -= 7000 * 0.05;
    }
  
    document.getElementById("duracion").textContent = resultado;
  }