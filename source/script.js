document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('.avatar');
    avatar.classList.add('widthFrames');
    setTimeout(() => {
        avatar.classList.remove('widthFrames');
    }, 800);
});

function pular() {
    const avatar = document.querySelector('.avatar');
    avatar.classList.add('pular');
    setTimeout(() => {
        avatar.classList.remove('pular');
    }, 600);
}

function primeiraParte() {
    document.getElementById('primeiraParte').scrollIntoView({ behavior: 'smooth' });
}

function segundaParte() {
    document.getElementById('segundaParte').scrollIntoView({ behavior: 'smooth' });
}

function terceiraParte() {
    document.getElementById('terceiraParte').scrollIntoView({ behavior: 'smooth' });
}

function quartaParte() {
    document.getElementById('quartaParte').scrollIntoView({ behavior: 'smooth' });
}

var modal = document.getElementById('modal');
var modalImg = document.getElementById('modalImg');
var corpo = document.querySelector('main')

function openModal(image) {
    modalImg.src = image.src
    modal.style.display = 'flex'
    corpo.style.filter = 'blur(7px)'
}

function closeModal() {
    modal.style.display = 'none'
    corpo.style.filter = 'blur(0px)'
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}


