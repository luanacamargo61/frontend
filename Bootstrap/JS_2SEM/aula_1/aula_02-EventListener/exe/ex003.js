const corSelecionada = document.querySelector("#corSelecionada");
const exibirCor = document.querySelector("#exibirSelecao");

function atualizarCor()
{
    const corSelecionadaValue = corSelecionada.value;

    exibirCor.textContent = `Cor selecionada: ${corSelecionada.value}`;

    exibirCor.style.color = corSelecionadaValue;

   
}
corSelecionada.addEventListener('change', atualizarCor);