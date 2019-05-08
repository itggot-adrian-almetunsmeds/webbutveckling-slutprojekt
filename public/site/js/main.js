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
document.querySelector('.hamburger').addEventListener("click", function(){
    document.querySelector('menu').classList.toggle('shazam')
})

document.querySelector('.wrapper').addEventListener("click", function(){
    document.querySelector('menu').classList.remove('shazam')
})