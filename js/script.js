const indicador = document.querySelector('.indicador');
const input = document.querySelector('.caja-texto');
const debil = document.querySelector('.debil');
const medio = document.querySelector('.medio');
const fuerte = document.querySelector('.fuerte');
const mensaje = document.querySelector('.mensaje');

let patronLetras = /[A-Za-z]+/;
let patronNumeros = /[0-9]+/;
let patronCaracteresEspeciales =
    /.[!,@,#,$,%,&,^,*,?,_,+,-,~,(,),¡,¿,=,",{,}, ]+/;

function checker() {
    if (input.value != '') {
        indicador.style.display = 'block';
        indicador.style.display = 'flex';
        mensaje.style.display = 'flex';
        mensaje.style.justifyContent = 'center';
        mensaje.style.alignItems = 'center';
    } else {
        indicador.style.display = 'none';
        mensaje.style.display = 'none';
    }

    if (
        input.value.length <= 5 &&
        (input.value.match(patronLetras) ||
            input.value.match(patronNumeros) ||
            input.value.match(patronCaracteresEspeciales))
    )
        numero = 1;
    if (
        input.value.length <= 8 &&
        ((input.value.match(patronLetras) &&
            input.value.match(patronNumeros)) ||
            (input.value.match(patronNumeros) &&
                input.value.match(patronCaracteresEspeciales)) ||
            (input.value.match(patronLetras) &&
                input.value.match(patronCaracteresEspeciales)))
    )
        numero = 2;
    if (
        input.value.length >= 12 &&
        input.value.match(patronLetras) &&
        input.value.match(patronNumeros) &&
        input.value.match(patronCaracteresEspeciales)
    )
        numero = 3;

    if (numero == 1) {
        debil.classList.add('active');
        mensaje.textContent = '¡Su nivel de contraseña es débil!';
        mensaje.classList.add('debil');
    }
    if (numero == 2) {
        medio.classList.add('active');
        mensaje.textContent = '¡Su nivel de contraseña es medio!';
        mensaje.classList.add('medio');
    } else {
        medio.classList.remove('active');
        mensaje.classList.remove('medio');
    }
    if (numero == 3) {
        medio.classList.add('active');
        fuerte.classList.add('active');
        mensaje.textContent = '¡Su nivel de contraseña es fuerte!';
        mensaje.classList.add('fuerte');
    } else {
        fuerte.classList.remove('active');
        mensaje.classList.remove('fuerte');
    }
}
