// alert("Tudo bem?")

var hora = new Date().getHours();
let saudacao = ""

if(hora < 12){
    saudacao = "Bom dia"
}

else if (hora < 18){
    saudacao = "Boa tarde"
}

else{
    saudacao = "Boa noite"
}

document.getElementById("mensagem").innerHTML = saudacao