function loguear()
{
var user= document.getElementById("usuario").value;
var pass= document.getElementById("pass").value;
if(user=="Angel" && pass=="123456"){
    alert("Usuario y contraseña validos");
    window.location="valentines.html";
    
} else {
    alert("Intenta de Nuevo");
}
} 