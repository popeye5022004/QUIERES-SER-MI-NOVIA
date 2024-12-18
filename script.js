const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const message = document.getElementById("message");
const container = document.querySelector(".container");

// Evento para el botón "Sí"
yesButton.addEventListener("click", () => {
    // Muestra el mensaje
    message.textContent = "¡Gracias por aceptar ser mi novia! Te amo ❤️";

    // Mantener el mensaje durante 30 segundos
    setTimeout(() => {
        // Cerrar la pantalla con pestañas negras
        document.body.style.overflow = "hidden"; // Evitar que se desplace
        const topBar = document.createElement("div");
        const bottomBar = document.createElement("div");
        const countdownText = document.createElement("p"); // Texto de cuenta regresiva

        topBar.style.position = "fixed";
        topBar.style.top = "0";
        topBar.style.left = "0";
        topBar.style.width = "100%";
        topBar.style.height = "50%";
        topBar.style.backgroundColor = "black";
        topBar.style.zIndex = "9999";
        topBar.style.display = "flex";
        topBar.style.justifyContent = "center";
        topBar.style.alignItems = "center";

        bottomBar.style.position = "fixed";
        bottomBar.style.bottom = "0";
        bottomBar.style.left = "0";
        bottomBar.style.width = "100%";
        bottomBar.style.height = "50%";
        bottomBar.style.backgroundColor = "black";
        bottomBar.style.zIndex = "9999";
        bottomBar.style.display = "flex";
        bottomBar.style.justifyContent = "center";
        bottomBar.style.alignItems = "center";

        countdownText.style.color = "white";
        countdownText.style.fontSize = "4rem"; // Aumenta el tamaño de la fuente
        countdownText.style.fontWeight = "bold";
        countdownText.style.margin = "0";

        topBar.appendChild(countdownText);
        bottomBar.appendChild(countdownText);

        document.body.appendChild(topBar);
        document.body.appendChild(bottomBar);

        // Iniciar cuenta regresiva después de 2 segundos de mostrar las barras negras
        setTimeout(() => {
            let countdown = 3;
            const countdownInterval = setInterval(() => {
                countdownText.textContent = `${countdown === 3 ? '③' : countdown === 2 ? '②' : '①'}`;
                countdown--;

                // Si llega a 0, redirige
                if (countdown < 0) {
                    clearInterval(countdownInterval);
                    window.location.href = "https://open.spotify.com/track/61ZZeINrXxiahoYWZoK0KD?si=ENstQQBARqaSnUG6ACtXQQ"; // Aquí el enlace del video de YouTube
                }
            }, 1000); // Actualiza cada segundo
        }, 2000); // Espera 2 segundos antes de comenzar la cuenta regresiva

    }, 3000); // Espera 30 segundos antes de cerrar la pantalla
});

// Evento para el botón "No"
noButton.addEventListener("click", () => {
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    // Posiciones aleatorias dentro del contenedor
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Mueve el botón a una nueva posición aleatoria
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});