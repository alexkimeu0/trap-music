window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#1abc9c",
        "#3498db",
        "#9b59b6",
        "#34495e",
        "#c0392b",
        "#f1c40f"
    ]

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            displayBubbles(index);
        });
    });

    const displayBubbles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";

        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        });
    }
});