function hideBoot() {
    document.querySelector('.circle_wrapper').style.top = '-200vh'
    setTimeout(function () {
        document.querySelector('.circle_wrapper').outerHTML = ''
    }, 2500);
}

setTimeout(function () {
    hideBoot();
}, 2);

// Toggles the menu
document.querySelector('.hamburger').addEventListener("click", function () {
    document.querySelector('menu').classList.toggle('shazam')
    document.querySelector('nav').classList.toggle('shazam')
})

function removeShazam() {
    document.querySelector('menu').classList.remove('shazam')
    document.querySelector('nav').classList.remove('shazam')
}
document.querySelector('.wrapper').addEventListener("click", function () {
    removeShazam()
})

window.addEventListener('scroll', function (ev) {
    let someDiv = document.querySelector('body');
    let distanceToTop = someDiv.getBoundingClientRect().top;
    let wrapper = document.querySelector(".wrapper")
    wrapper.style.transformOrigin = "left " + (distanceToTop * -1) + "px"
    console.log(distanceToTop);
});