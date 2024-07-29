document.addEventListener('DOMContentLoaded', function () {
    const animar = document.querySelectorAll('.animar');
    const desiredPixels = 135;

    // Calcula a porcentagem de threshold baseado na altura da viewport
    const thresholdPercentage = (desiredPixels / window.innerHeight);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: thresholdPercentage
    });

    animar.forEach(element => {
        observer.observe(element);
    });
});


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
        window.open('https://github.com/Fabito02/', '_blank');
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

function setTheme() {
    let body = document.querySelector('body');
    let currentTheme = body.getAttribute('theme');
    let themeButton = document.getElementById("theme")

    if (currentTheme === "dark") {
        body.setAttribute('theme', 'light');
        themeButton.innerHTML = '<i class="fa-solid fa-toggle-off"></i>'
    } else {
        body.setAttribute('theme', 'dark');
        themeButton.innerHTML = '<i class="fa-solid fa-toggle-on"></i>'
    }
}