let parallax =
    document.getElementById("acerca-de-foto");
let parallax2 =
    document.getElementById("acerca-de");
let parallax3 =
    document.getElementById("club");

function scrollParallax() {
    let scrollTop =
        document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * .07 + 'px)';
    parallax2.style.transform = 'translateY(' + scrollTop * -.4 + 'px)';
    parallax3.style.transform = 'translate(' + scrollTop * .09 + 'px)';
}

window.addEventListener('scroll', scrollParallax);