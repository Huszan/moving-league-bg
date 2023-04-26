
// Parallax
const animatedBackground = document.getElementById('animated-bg');
const elementsToAnimate = [
    {
        ref: document.getElementById('2nd-layer'),
        speed: 0.010,
        translate: {
            x: '0px',
            y: '0px',
        },
        rotate: {
            x: '0deg',
            y: '0deg',
        }
    },
    {
        ref: document.getElementById('3rd-layer'),
        speed: 0.005,
        translate: {
            x: '0px',
            y: '0px',
        },
        rotate: {
            x: '0deg',
            y: '0deg',
        }
    },
    {
        ref: document.getElementById('ahri'),
        speed: 0.030,
        translate: {
            x: '-20%',
            y: '0px',
        },
        rotate: {
            x: '0deg',
            y: '180deg',
        }
    },
    {
        ref: document.getElementById('kayle'),
        speed: 0.015,
        translate: {
            x: '-65%',
            y: '0px',
        },
        rotate: {
            x: '0deg',
            y: '0deg',
        }
    },
    {
        ref: document.getElementById('ryze'),
        speed: 0.030,
        translate: {
            x: '20%',
            y: '0px',
        },
        rotate: {
            x: '0deg',
            y: '0deg',
        }
    }
]

animatedBackground.addEventListener("mousemove", event => parallaxAnimation(event));

function parallaxAnimation(event) {
    let curr_x = (speed) => {
        return event.pageX * speed;
    }
    let curr_y = (speed) => {
        return event.pageY * speed;
    }

    for (let el of elementsToAnimate) {
        el.ref.style.transform =
            `translate( calc(${ curr_x(el.speed) }px + ${ el.translate.x }),calc(${ curr_y(el.speed) }px + ${ el.translate.y }) ) 
            rotateX(${el.rotate.x}) rotateY(${el.rotate.y})`;
    }
}

// Audio player
const audioEl = document.getElementById('audio-el');
const audioElImgRef = document.getElementById('music-player-toggle-icon');
const audioProgressBarEl = document.getElementsByClassName('progress-bar').item(0);

const playIcon = 'assets/icons/play_arrow.svg';
const  pauseIcon = 'assets/icons/pause.svg';

function audioProgress() {
    let current = audioEl.currentTime;
    let duration = audioEl.duration;
    return current / duration * 100;
}

function audioToggle() {
    if (!audioEl.paused) { audioEl.pause(); }
    else { audioEl.play(); }
}

audioEl.addEventListener('pause', () => {
    audioElImgRef.src = playIcon;
})
audioEl.addEventListener('play', () => {
    audioElImgRef.src = pauseIcon;
})
audioEl.addEventListener('timeupdate', () => {
    audioProgressBarEl.style.width = `${audioProgress()}%`;
})

// Loading
const loadingOverlay = document.getElementById('loading-overlay');

addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loadingOverlay.classList.toggle('fade');
    }, 200)
})
