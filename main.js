const btnLimpiar = document.getElementById("btnLimpiar");
const resultado = document.getElementById("resultado");

const trabajadoresN = document.querySelector("#empleados");
btnLimpiar.addEventListener("click", limpiarResultado);

trabajadoresN.addEventListener("keyup", mostrarResultado);

function mostrarResultado() {
  resultado.innerText = calcularMuestra();
}

function limpiarResultado() {
  trabajadoresN.value = 0;
  resultado.innerText = "";
}

function calcularMuestra() {
  const VALOR_1 = 0.9604;
  const VALOR_2 = 0.0025;
  let N = parseInt(trabajadoresN.value);

  let muestra =
    N < 0
      ? alert("Ingresa un número mayor a 0")
      : ((VALOR_1 * N) / (VALOR_2 * (N - 1) + VALOR_1)).toFixed(2);

  return muestra;
}
