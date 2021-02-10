let cat = document.querySelector('#img-cat');
let musica = document.querySelector('#musica');

let number = 0;
function rotation() {
    number++

    if (number > 360) {
        number = 0;
    }

    cat.setAttribute('style', `transform:rotate(${number}deg)`)

}

setInterval(rotation, 10);

document.body.addEventListener('click',()=>{
    musica.play();
    document.querySelector('h2').style.display = 'block';
});