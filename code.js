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