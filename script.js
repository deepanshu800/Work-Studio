function loading() {
    var tl = gsap.timeline()

    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.4,
        duration: 0.4,
        ease: "expo.out"
    })

    tl.from("#yellow2", {
        top: "100%",
        delay: 0.4,
        duration: 0.4,
        ease: "expo.out"
    }, "anim")

    tl.to("#loader h1", {
        delay: 0.5,
        duration: 0.4,
        color: "black",
    }, "anim")
    tl.to("#loader", {
        opacity: 0
    })
}
loading()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector(".back-to-top").addEventListener("click", () => {
    scroll.scrollTo(0)
})

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        var bgimg = ele.getAttribute("date-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})


// IMages

const images = [
    'https://works.studio/assets/imager/images/mineral-health/38349/MIN-1_240208_000417_1a58980f77ae6d8c6a1e26c40e92a05d.jpg',
    'https://works.studio/assets/imager/images/converse-global-fa23/37951/converse-21_1a58980f77ae6d8c6a1e26c40e92a05d.jpg',
    'https://works.studio/assets/imager/images/skky-partners/37986/skky-25_1a58980f77ae6d8c6a1e26c40e92a05d.jpg',
    'https://works.studio/assets/imager/images/boldly/37287/BOLDLY-1_1a58980f77ae6d8c6a1e26c40e92a05d.jpg',
    'https://works.studio/assets/imager/images/us-soccer/38414/USS-1_240208_001956_1a58980f77ae6d8c6a1e26c40e92a05d.jpg'
];

let curr_index = 0;
let slideshowInterval;

function changeBackground() {
    const slideshow = document.querySelector('#page2')

    slideshow.style.backgroundImage = `url(${images[curr_index]})`;

    curr_index = (curr_index + 1) % images.length;
}
slideshowInterval = setInterval(changeBackground, 3000);
function startSlideshow() {
    slideshowInterval = setInterval(changeBackground, 3000);
}
function stopSlideshow() {
    clearInterval(slideshowInterval);
}

document.querySelector('#page2').addEventListener('mouseover', stopSlideshow);
document.querySelector('#page2').addEventListener('mouseleave', startSlideshow);