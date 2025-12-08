document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("audioMusica");
    const simb = document.getElementById("simM");
    const naob = document.getElementById("naoM");

    if (musica) {
        musica.src = "universe.mp3";
        musica.loop = true;

        if (localStorage.getItem("musica") === "on") {
            musica.muted = false;
            musica.play();
        }

        if (simb) {
            simb.addEventListener("click", () => {
                musica.muted = false;
                musica.play();
                localStorage.setItem("musica", "on");
            });
        }

        if (naob) {
            naob.addEventListener("click", () => {
                musica.pause();
                musica.currentTime = 0;
                localStorage.setItem("musica", "off");
            });
        }
    }
});
