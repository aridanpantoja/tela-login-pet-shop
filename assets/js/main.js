const botao = document.querySelector('#botao-senha');
const input = document.querySelector('#pass')

botao.addEventListener("click", function() {
    if (botao.classList.contains('fa-eye') == true) {
        botao.classList.add('fa-eye-slash')
        botao.classList.remove('fa-eye')
        input.setAttribute('type', 'text')
    } else {
        botao.classList.add('fa-eye')
        botao.classList.remove('fa-eye-slash')
        input.setAttribute('type', 'password')
    }
})