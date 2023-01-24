let imageMoi = document.getElementById('imgMoi')

imageMoi.addEventListener('mouseover' ,() => {
    imageMoi.classList.add('zoom')
})

imageMoi.addEventListener('mouseout', () => {
    imageMoi.classList.remove('zoom')
})