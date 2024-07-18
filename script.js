document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const popup = document.getElementById("popup");
    const fireworksContainer = document.querySelector(".fireworks");
    const heartsContainer = document.querySelector(".hearts");

    yesButton.addEventListener("click", function () {
        popup.classList.remove("hidden");
        createFireworksAndHearts();
    });

    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.top = y + "px";
        noButton.style.left = x + "px";
    });

    function createFireworksAndHearts() {
        for (let i = 0; i < 10; i++) {
            const firework = document.createElement("div");
            firework.className = "firework";
            firework.style.top = Math.random() * 100 + "%";
            firework.style.left = Math.random() * 100 + "%";
            firework.style.backgroundImage = "url('https://i.pinimg.com/originals/7d/04/08/7d0408e95b769d43554f3dbc42fe1ac1.gif')"; // Replace with firework image URL
            fireworksContainer.appendChild(firework);

            const heart = document.createElement("div");
            heart.className = "heart";
            heart.style.top = Math.random() * 100 + "%";
            heart.style.left = Math.random() * 100 + "%";
            heart.style.backgroundImage = "url('https://i.pinimg.com/originals/7d/04/08/7d0408e95b769d43554f3dbc42fe1ac1.gif')"; // Replace with heart image URL
            heartsContainer.appendChild(heart);
        }
    }
});
