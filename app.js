
function encriptar() {
    let texto=document.getElementById("encriptar").value;
    let mensajeEncriptado=texto.replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat");    
    if (texto.length!=0) {
        document.getElementById("muñecoID").style.display="none";
        document.getElementById("tituloID").style.display="none";
        document.getElementById("descripcionID").textContent=mensajeEncriptado;
        document.getElementById("cajapID").style.top="5%";
        document.getElementById("descripcionID").style.textAlign="left";
        document.getElementById("botonCopiar").style.display="revert";
    } else {
        swal.fire({ title: "Lo sentimos", text: "Debe ingresar un texto", icon: "warning", backdrop: false, customClass: { popup: "popupalert" } });
    }
}
function desencriptar() {
    let texto=document.getElementById("encriptar").value;
    let mensajeEncriptado=texto.replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");    
    if (texto.length!=0) {
        document.getElementById("muñecoID").style.display="none";
        document.getElementById("tituloID").style.display="none";
        document.getElementById("descripcionID").textContent=mensajeEncriptado;
        document.getElementById("cajapID").style.top="5%";
        document.getElementById("descripcionID").style.textAlign="left";
        document.getElementById("botonCopiar").style.display="revert";
        
    } else {
        swal.fire({ title: "Lo sentimos", text: "Debe ingresar un texto", icon: "warning", backdrop: false });
    }
}
function copiarTexto(){
    var elemento = document.getElementById("descripcionID");   
    var areaTexto = document.createElement("textarea");    
    areaTexto.value = elemento.textContent;    
    document.body.appendChild(areaTexto);    
    areaTexto.select();
    areaTexto.setSelectionRange(0, 99999);     
    document.execCommand("copy");    
    document.body.removeChild(areaTexto);   

    swal.fire({ title: "Exito", text: "Texto copiado al portapapeles", icon: "success", backdrop: false }); 
    
}

const boton = document.getElementById("botonEncriptar").addEventListener("click", encriptar);
const botonDes = document.getElementById("botonDesncriptar").addEventListener("click", desencriptar);
const botonCopiar = document.getElementById("botonCopiar").addEventListener("click", copiarTexto);

