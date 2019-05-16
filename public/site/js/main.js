function hideBoot() {
    document.querySelector('.circle_wrapper').style.top = '-200vh'
    setTimeout(function () {
        document.querySelector('.circle_wrapper').outerHTML = ''
        document.cookie = "visited=true;";
    }, 800);
}

addEventListener("load", function () {
    hideBoot()
})

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

window.addEventListener('scroll', function (e) {
    let someDiv = document.querySelector('body');
    let distanceToTop = someDiv.getBoundingClientRect().top;
    let wrapper = document.querySelector(".wrapper")
    wrapper.style.transformOrigin = "left " + (distanceToTop * -1) + "px"
});

function hideError(hide) {
    let error = document.querySelectorAll("." + hide)
    error.forEach(element => {
        element.style.padding = "0"
        element.style.top = "-200vh"
    });
}

// Validates the form data and then supposedly sends the data to a destination
function sendForm() {
    var email = document.querySelector('#email')
    var value = email.value
    if (value.includes("@") == false || value.includes(".") == false) {
        let error = document.createElement("div")
        error.classList.add("email_error")
        error.classList.add("error")
        error.innerHTML = "<p>Please insert a valid email adress</p>"
        document.querySelector(".errors").appendChild(error)
        setTimeout(function () {
            hideError("email_error");
            setTimeout(function () {
                error.outerHTML = ""
            }, 1500);
        }, 2000);
    }
    var topic = document.querySelector('#topic')
    value = topic.value
    if (value == "Insert topic" || value == "" || value == " " || value == " Insert topic") {
        let error = document.createElement("div")
        error.classList.add("topic_error")
        error.classList.add("error")
        error.innerHTML = "<p>Please insert a valid topic</p>"
        document.querySelector(".errors").appendChild(error)
        setTimeout(function () {
            hideError("topic_error");
            setTimeout(function () {
                error.outerHTML = ""
            }, 1500);
        }, 2000);

    }
}