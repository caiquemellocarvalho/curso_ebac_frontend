const form = document.getElementById ('form');
const numeroA = document.getElementById('numero-A');
const numeroB = document.getElementById('numero-B');
let formEValido = false;

function validaNumber(numeromaior) {
    return parseInt(numeroB.value) > parseInt(numeroA.value);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const MensagemSucesso = `O número B <b>${numeroB.value}</b> é maior que o número A <b>${numeroA.value}</b>.`;

    formEValido = validaNumber
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = MensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'nenhum';

        numeroA.value = ' ';
        numeroB.value = ' ';
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }    
});

numeroB.addEventListener('keyup', function(e){
    formEValido = validaNumber(e.target.value);

    if (!formEValido) {
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});