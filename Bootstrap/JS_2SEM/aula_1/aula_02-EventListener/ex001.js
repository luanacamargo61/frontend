const botao = document.querySelector('#aumentar');
const botao2 = document.querySelector('#diminuir');
const botao3 = document.querySelector('#zerar');
const contadorElemento = document.querySelector('#contador');

let contador = 0;

function contando()
{
    contador++
    contadorElemento.textContent = contador;
}
function tirando()
{
    contador--
    contadorElemento.textContent = contador;
}
function zerando()
{
    contador = 0;
    contadorElemento.textContent = contador;
}

botao.addEventListener('click', contando);
botao2.addEventListener('click', tirando);
botao3.addEventListener('click', zerando); 