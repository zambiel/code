// Selección de elementos del DOM
const anterior = document.querySelector("#anterior");
const pause = document.querySelector("#pause");
const siguiente = document.querySelector("#siguiente");
const circulo = document.querySelector(".circulo");
const cover = document.querySelector("#cover");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const progress = document.getElementById("progress");
const timeDisplay = document.getElementById("timeDisplay");
const minutesFinal = document.querySelector("#minutes-final");
// Inicialización de elementos y variables
let currentTrackIndex = 0;
const audioHTML = new Audio();
const tracks = [
    {
        imagen: "img/cover-1.png",
        title: "Lost in the City Lights",
        author: "Cosmo Sheldrake",
        audio: "audio/lost-in-city-lights-145038.mp3",
        minutesFinish: "01:12"
    },
    {
        imagen: "img/cover-2.png",
        title: "Forest Lullaby",
        author: "Lesfm",
        audio: "audio/forest-lullaby-110624.mp3", 
        minutesFinish: "02:18"
    }
];

// Configuración inicial al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadTrack(currentTrackIndex);
    audioHTML.play();

        /* SIGUIENTE SECCION */
    siguiente.addEventListener("click", () => {

        currentTrackIndex++;


        if(currentTrackIndex % 2 === 0) {
            currentTrackIndex = 0;
            loadTrack(currentTrackIndex);
        } else {
            currentTrackIndex = 1;
            loadTrack(currentTrackIndex);
        }




    })
});



// Función para cargar una pista de audio y actualizar los datos visuales
function loadTrack(index) {
    const track = tracks[index];
    cover.src = track.imagen;
    title.textContent = track.title;
    author.textContent = track.author;
    audioHTML.src = track.audio;
    minutesFinal.textContent = track.minutesFinish;
}

// Alternar reproducción/pausa y actualizar el botón de estado
pause.addEventListener("click", () => {
    circulo.classList.toggle("fondo-blue");
    audioHTML.paused ? audioHTML.play() : audioHTML.pause();
});

// Actualizar la barra de progreso y el tiempo visual
audioHTML.addEventListener("timeupdate", () => {
    const { currentTime, duration } = audioHTML;
    const progressPercentage = (currentTime / duration) * 100;
    progress.value = progressPercentage;

    // Actualizar el degradado de la barra de progreso
    progress.style.background= `linear-gradient(to right, #C93B76 ${progressPercentage}%, #E5E7EB ${progressPercentage}%)`;

    // Mostrar tiempo actual en minutos y segundos
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60).toString().padStart(2, "0");
    timeDisplay.textContent = `${minutes}:${seconds}`;
});

// Reiniciar la canción al hacer clic en el botón "anterior"
anterior.addEventListener("click", () => {
    resetTrack();
});

// Función para resetear la pista de audio al inicio y actualizar la visualización
function resetTrack() {
    audioHTML.currentTime = 0; // Reinicia el audio
    timeDisplay.textContent = "0:00"; // Resetea el tiempo visual a 0
    progress.value = 0; // Reinicia la barra de progreso
    progress.style.backgroundColor = "linear-gradient(to right, #C93B76 0%, #E5E7EB 0%)"; // Restablece el degradado
}