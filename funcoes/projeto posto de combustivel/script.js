let valorAlcool = Number(document.querySelector("#valorAlcool").value);

let valorGasolina = Number(document.querySelector("#valorGasolina").value);

const resultado = document.querySelector("#resultado");

function calcular() {
    const razao = valorAlcool / valorGasolina;
    
    if (Math.abs(razao - 1) < 0.03) {  // Diferença < 3%
        resultado.innerHTML = "<p style='color: blue;'>⚪ Valores IGUAIS! Escolha por preferência</p>";
    } else if (razao < 1) {
        resultado.innerHTML = "<p style='color: green;'>🟢 Melhor Álcool</p>";
    } else {
        resultado.innerHTML = "<p style='color: red;'>🔴 Melhor Gasolina</p>";
    }
}