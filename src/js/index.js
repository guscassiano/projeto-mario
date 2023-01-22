const botaoTrailer = document.querySelector(".button-trailer")
const modal = document.querySelector(".modal")
const botaoFechar = document.querySelector(".fechar-modal")
const video = document.getElementById('video')
const linkVideo = video.src


function alternarModal() {
    modal.classList.toggle('aberto');
}

botaoTrailer.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', linkVideo)
})

botaoFechar.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', '');
})
