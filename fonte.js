document.addEventListener("DOMContentLoaded", () => {
    const btnMais = document.getElementById("mais");
    const btnMenos = document.getElementById("menos");

    let ajuste = parseInt(localStorage.getItem("ajusteFonte")) || 0;

    const LIMITE_MAX = 12;
    const LIMITE_MIN = -8;

    aplicarAjuste(ajuste);

    btnMais.addEventListener("click", () => {
        if (ajuste < LIMITE_MAX) {
            ajuste += 2;
            aplicarAjuste(ajuste);
            localStorage.setItem("ajusteFonte", ajuste);
        }
    });

    btnMenos.addEventListener("click", () => {
        if (ajuste > LIMITE_MIN) {
            ajuste -= 2;
            aplicarAjuste(ajuste);
            localStorage.setItem("ajusteFonte", ajuste);
        }
    });

    function aplicarAjuste(valorAjuste) {
        document.querySelectorAll("*").forEach(el => {
            const estilo = window.getComputedStyle(el);
            const base = parseFloat(estilo.fontSize);
            if (!isNaN(base)) {
                el.style.fontSize = (base + valorAjuste) + "px";
            }
        });
    }
});
