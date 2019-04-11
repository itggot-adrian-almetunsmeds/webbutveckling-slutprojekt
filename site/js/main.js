function hideBoot() {
    document.querySelector('.circle_wrapper').style.top = '-200vh'
    setTimeout(function () {
        document.querySelector('.circle_wrapper').outerHTML = ''
    }, 2500);
}



setTimeout(function () {
    hideBoot();
}, 2500);