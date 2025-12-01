let tamanhoSalvo = localStorage.getItem("tamanhoFonte");

if (tamanhoSalvo) {
  document.documentElement.style.fontSize = tamanhoSalvo + "px";
} else {
  tamanhoSalvo = 16;
  document.documentElement.style.fontSize = "16px";
}

const btnMais = document.getElementById("mais");
const btnMenos = document.getElementById("menos");

if (btnMais) {
  btnMais.addEventListener("click", function () {
    let tamanho = parseInt(localStorage.getItem("tamanhoFonte")) || 16;
    if (tamanho < 22) {
      tamanho += 2;
      document.documentElement.style.fontSize = tamanho + "px";
      localStorage.setItem("tamanhoFonte", tamanho);
    }
  });
}

if (btnMenos) {
  btnMenos.addEventListener("click", function () {
    let tamanho = parseInt(localStorage.getItem("tamanhoFonte")) || 16;
    if (tamanho > 8) {
      tamanho -= 2;
      document.documentElement.style.fontSize = tamanho + "px";
      localStorage.setItem("tamanhoFonte", tamanho);
    }
  });
}
