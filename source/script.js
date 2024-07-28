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

function img0() {
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('modalImg');
    let corpo = document.querySelector('main')
    modalImg.src = "img/img0.png"
    modal.style.display = 'flex'
    corpo.style.filter = 'blur(7px)'
}

function img1() {
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('modalImg');
    let corpo = document.querySelector('main')
    modalImg.src = "img/img1.png"
    modal.style.display = 'flex'
    corpo.style.filter = 'blur(7px)'
}

function img2() {
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('modalImg');
    let corpo = document.querySelector('main')
    modalImg.src = "img/img2.png"
    modal.style.display = 'flex'
    corpo.style.filter = 'blur(7px)'
}

function img3() {
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('modalImg');
    let corpo = document.querySelector('main')
    modalImg.src = "img/img3.png"
    modal.style.display = 'flex'
    corpo.style.filter = 'blur(7px)'
}

function closeModal() {
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('modalImg');
    let corpo = document.querySelector('main')
    modal.style.display = 'none'
    corpo.style.filter = 'blur(0px)'
}


