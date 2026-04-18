const resultado = document.querySelector("#resultado");

function calcular() {

    let valorAlcool = Number(document.querySelector("#valorAlcool").value);

    let valorGasolina = Number(document.querySelector("#valorGasolina").value); 

    if (valorAlcool == valorGasolina) {
        resultado.innerHTML = "<p>Valores IGUAIS! Escolha por preferência</p>";}
    else if (valorAlcool / valorGasolina <= 0.7) {
        resultado.innerHTML = "<p>Melhor Álcool</p>";
    } else {
        resultado.innerHTML = "<p>Melhor Gasolina</p>";
    }
}