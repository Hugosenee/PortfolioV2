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



// menu burger

const menuburger = document.getElementById('burger')
const displayburger = document.getElementById('burgerdisplay')
const burgerclose = document.getElementById('burgerclose')

const lienBurger = document.querySelectorAll('.aBurger')

menuburger.addEventListener('click', () => {
    displayburger.classList.toggle('showBurger')
    displayburger.classList.toggle('removeBurger')

})

burgerclose.addEventListener('click', () => {
    displayburger.classList.toggle('showBurger')
    displayburger.classList.toggle('removeBurger')
})

lienBurger.forEach( lien => {
    lien.addEventListener('click', () => {
        displayburger.classList.toggle('showBurger')
        displayburger.classList.toggle('removeBurger')
    })
})

// Mail

const mail = document.getElementById('mail')
const displaymail = document.getElementById('maildisplay')
const mailclose = document.getElementById('mailclose')


mail.addEventListener('click', () => {
    displaymail.classList.toggle('showMail')
    displaymail.classList.toggle('removeMail')

})

mailclose.addEventListener('click', () => {
    displaymail.classList.toggle('showMail')
    displaymail.classList.toggle('removeMail')
})



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
