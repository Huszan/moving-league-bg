
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
