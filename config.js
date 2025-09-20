const musica = document.getElementById("musica");
const simb = document.getElementById("simM");
const naob = document.getElementById("naoM");
if (localStorage.getItem("musica") === "on") {
    musica.play();
}
simb.addEventListener("click", () => {
    musica.play();
    localStorage.setItem("musica", "on");
});
naob.addEventListener("click", () => {
    musica.pause();
    musica.currentTime = 0;
    localStorage.setItem("musica", "off");
});