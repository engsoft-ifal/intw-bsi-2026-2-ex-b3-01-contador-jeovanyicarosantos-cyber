
let total = 0;

const elementoTotal = document.querySelector("#total");
const botaoSomar = document.querySelector("#somar");
const botaoZerar = document.querySelector("#zerar");

// Ao carregar a página
elementoTotal.textContent = total;

// Botão Somar
botaoSomar.addEventListener("click", () => {
    total++;
    elementoTotal.textContent = total;
});

// Botão Zerar
botaoZerar.addEventListener("click", () => {
    total = 0;
    elementoTotal.textContent = total;
});
