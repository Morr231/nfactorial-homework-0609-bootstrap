const audio = document.getElementById("audio");
const audioButton = document.getElementById("audio-button");
const playerImage = document.getElementById("player-img");

const video = document.getElementById("video");
const videoButton = document.getElementById("video-button");

let interval;

audioButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        video.play();
        playerImage.style.animation = "13s infinite rotate linear";
        interval = setInterval(() => {
            progressBar.setAttribute(
                "value",
                parseInt(progressBar.getAttribute("value")) + 1
            );
        }, 1000);
    } else {
        audio.pause();
        video.pause();
        playerImage.style.animation = "";
        clearInterval(interval);
    }
});

videoButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

const progressBar = document.getElementById("progressbar");

progressBar.setAttribute("max", 237);

progressBar.addEventListener("change", (e) => {
    video.currentTime = e.target.value;
    audio.currentTime = e.target.value;

    clearInterval(interval);

    console.log(interval);

    setInterval(() => {
        progressBar.setAttribute(
            "value",
            parseInt(progressBar.getAttribute("value")) + 1
        );
    }, 1000);
});

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("change", (e) => {
    video.currentTime += 10;
    audio.currentTime += 10;
});

rightArrow.addEventListener("change", (e) => {
    video.currentTime -= 10;
    audio.currentTime -= 10;
});
