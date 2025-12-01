document.addEventListener("DOMContentLoaded", () => {
    const root = document.body; // altera o site todo
    const btnMais = document.getElementById("mais");
    const btnMenos = document.getElementById("menos");

    let tamanho = parseInt(localStorage.getItem("tamanhoFonte")) || 16;

    root.style.fontSize = tamanho + "px";

    btnMais.addEventListener("click", () => {
        if (tamanho < 22) {
            tamanho++;
            root.style.fontSize = tamanho + "px";
            localStorage.setItem("tamanhoFonte", tamanho);
        }
    });

    btnMenos.addEventListener("click", () => {
        if (tamanho > 8) {
            tamanho--;
            root.style.fontSize = tamanho + "px";
            localStorage.setItem("tamanhoFonte", tamanho);
        }
    });
});
