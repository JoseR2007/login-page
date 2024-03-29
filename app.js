﻿const $login = document.getElementById('login');
const $signup = document.getElementById('signup');
const $signupBtn = document.getElementById('signup-btn');
const $loginBtn = document.getElementById('login-btn');
//Se Utiliza '$' antes del nombre para indicar que es un elemento del DOM

$loginBtn.addEventListener("click", ()=>{
    $signup.classList.add('hidden'); //Se utiliza la clase 'hidden' para manejar mas facil
    setTimeout(()=>{
        $login.classList.remove('hidden'); //Se remueve la clase 'hidden' para mostrar el contenido
    }, 250) //espera a la animacion para mostrar el contenido
})

$signupBtn.addEventListener("click", ()=>{
    $login.classList.add('hidden');
    setTimeout(()=>{
        $signup.classList.remove('hidden');
        $signup.style.display = 'flex';
    }, 250) //espera a la animacion para mostrar el contenido
})
