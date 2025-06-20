const button = document.querySelector('.btn-add');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.task-list');

let minhaListaDeItens = []



function adicionarNovaTarefa() {

  if (input.value.trim() === '') {
    alert("Por favor, insira uma tarefa antes de adicionar!");
    return;
  }

  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false
  })

  input.value = ''

  mostrarTarefas()
}



function mostrarTarefas() {

  let novaLi = ''

  minhaListaDeItens.forEach((item, index) => {

    novaLi = novaLi + `

        <li class="task-item ${item.concluida && 'done'}">
            <img src="img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarTarefa(${index})">
        </li>

      `
  })

  listaCompleta.innerHTML = novaLi

  localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(index) {
  minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

  mostrarTarefas()
}

function deletarTarefa(index) {
  minhaListaDeItens.splice(index, 1)
  mostrarTarefas()
}

function carregarTarefas() {
  const tarefasLocalStorage = localStorage.getItem('lista')

  if (tarefasLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasLocalStorage)
  }

  mostrarTarefas()
}

carregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)

