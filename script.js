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
        navbar.classList.add("active")
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("active");
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


