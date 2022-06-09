const sounds = document.getElementsByClassName("sound");
const soundAudios = document.getElementsByClassName("sound-audio");

window.addEventListener("keyup", (event) => {
    [...sounds].forEach((sound, index) => {
        if (event.key == sound.innerText.toLowerCase()) {
            if (soundAudios[index].paused) {
                soundAudios[index].play();
            } else {
                soundAudios[index].pause();
            }
        }
    });
});

[...sounds].forEach((sound, index) => {
    sound.addEventListener("click", () => {
        if (soundAudios[index].paused) {
            soundAudios[index].play();
        } else {
            soundAudios[index].pause();
        }
    });
});
