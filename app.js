const $login = document.getElementById('login');
const $signup = document.getElementById('signup');
const $signupBtn = document.getElementById('signup-btn');
const $loginBtn = document.getElementById('login-btn');

$loginBtn.addEventListener("click", ()=>{
    $signup.classList.add('hidden');
    setTimeout(()=>{
        $login.classList.remove('hidden');
    }, 250)
})

$signupBtn.addEventListener("click", ()=>{
    $login.classList.add('hidden');
    setTimeout(()=>{
        $signup.classList.remove('hidden');
        $signup.style.display = 'flex';
    }, 250)
})