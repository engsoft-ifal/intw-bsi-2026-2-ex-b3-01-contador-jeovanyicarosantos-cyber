
let contador = 0;

const numero = document.getElementById("numero");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const zerar = document.getElementById("zerar");

// Aumentar
aumentar.addEventListener("click", function() {
    contador++;
    numero.textContent = contador;
});

// Diminuir
diminuir.addEventListener("click", function() {
    contador--;
    numero.textContent = contador;
});

// Zerar
zerar.addEventListener("click", function() {
    contador = 0;
    numero.textContent = contador;
});
