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
  
    document.getElementById("resultado").textContent = "Inscripción Exitosa";
  }
  
  function duracion() 
  {
    var v1 = document.getElementById("area").value;
    var v2 = document.getElementById("nivel").value;
  
    if (v2 == 1)
    { 
        if (v1 == 2) {
            document.getElementById("duracion").textContent =
            "4 semanas";
        }
        if (v1 == 1) {
            document.getElementById("duracion").textContent =
            "5 semanas";
        }
  
        if (v1 == 3) {
            document.getElementById("duracion").textContent =
            "6 semanas";
        }
    }
    if (v2 == 2)
    { 
        if (v1 == 2) {
            document.getElementById("duracion").textContent =
            "7 semanas";
        }
        if (v1 == 1) {
            document.getElementById("duracion").textContent =
            "8 semanas";
        }
  
        if (v1 == 3) {
            document.getElementById("duracion").textContent =
            "9 semanas";
        }
    }
    if (v2 == 3)
    { 
        if (v1 == 2) {
            document.getElementById("duracion").textContent =
            "10 semanas";
        }
        if (v1 == 1) {
            document.getElementById("duracion").textContent =
            "11 semanas";
        }
  
        if (v1 == 3) {
            document.getElementById("duracion").textContent =
            "12 semanas";
        }
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