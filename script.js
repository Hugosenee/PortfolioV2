// animation image

let imageMoi = document.getElementById('imgMoi')

imageMoi.addEventListener('mouseover' ,() => {
    imageMoi.classList.add('zoom')
})

imageMoi.addEventListener('mouseout', () => {
    imageMoi.classList.remove('zoom')
})

// navbar

let navbar = document.getElementById("navbar");
let section = document.getElementById("bottom");

window.addEventListener("scroll", function() {
    if (window.scrollY >= section.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// couleur icon nav bar

let about = document.getElementById("about")
let projects = document.getElementById("projects")
let contact = document.getElementById("contacts")

let iconabout = document.getElementById("iconabout")
let iconprojects = document.getElementById("iconprojects")
let iconcontact = document.getElementById("iconcontact")

window.addEventListener("scroll", function() {
    if (window.scrollY >= about.offsetTop) {
        iconabout.style.color = "var(--vert)"
        iconprojects.style.color = "var(--noir)"
        iconcontact.style.color = "var(--noir)"
    }
});

window.addEventListener("scroll", function() {
    if (window.scrollY >= projects.offsetTop) {
        iconprojects.style.color = "var(--vert)"
        iconabout.style.color = "var(--noir)"
        iconcontact.style.color = "var(--noir)"
    }
});

window.addEventListener("scroll", function() {
    if (window.scrollY > contact.offsetTop) {
        iconcontact.style.color = "var(--vert)"
        iconabout.style.color = "var(--noir)"
        iconprojects.style.color = "var(--noir)"
    }
});

// slider

const container = document.querySelector(".card_container");
const cards = document.querySelectorAll(".card");

document.getElementById("left").addEventListener("click", function() {
    toPrevious()
})

document.getElementById("right").addEventListener("click", function() {
    toNext()
})

let current = 0;
let prev = 1;
let next = 2;

const toPrevious = () => {

    if (current > 0) {
        toSlide(current - 1)
    } else {
        toSlide(cards.length - 1)
    }
}

const toNext = () => {

    if (current < cards.length - 1) {
        toSlide(current + 1)
    } else {
        toSlide(0)
    }
}

const toSlide = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("vue");
        cards[i].classList.remove("prev");
        cards[i].classList.remove("next");
    }

    if (next == cards.length) {
        next = 0;
    }

    if (prev == -1) {
        prev = cards.length - 1;
    }

    cards[current].classList.add("vue");
    cards[prev].classList.add("prev");
    cards[next].classList.add("next");
}

// menu burger

const menuburger = document.getElementById('burger')
const displayburger = document.getElementById('burgerdisplay')
const burgerclose = document.getElementById('burgerclose')

const lienBurger = document.querySelectorAll('.aBurger')

menuburger.addEventListener('click', () => {
    displayburger.classList.add('showBurger')
})

burgerclose.addEventListener('click', () => {
    CloseBurger()
})

lienBurger.forEach( lien => {
    lien.addEventListener('click', () => {
        CloseBurger()
    })
})

const CloseBurger = () => {

    displayburger.classList.remove('showBurger')
    displayburger.classList.add('removeBurger')

}

// Mail

const mail = document.getElementById('mail')
const displaymail = document.getElementById('maildisplay')
const mailclose = document.getElementById('mailclose')

const emailcontact = document.getElementById('emailcontact')

mail.addEventListener('click', () => {
    displaymail.classList.add('showMail')
})

emailcontact.addEventListener('click', () => {
    displaymail.classList.add('showMail')
})

mailclose.addEventListener('click', () => {
    closeMail()
})

const closeMail = () => {
    displaymail.classList.remove('showMail')
    displaymail.classList.add('removeMail')
}

// apparaitre div scroll

const timing = .7
const options = {
    root: null,
    rootMargin: '0px',
    threshold: timing
}

const HandleIntersect = function (entries , observer) {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > timing){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(HandleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (reveal) {
    observer.observe(reveal)
});
