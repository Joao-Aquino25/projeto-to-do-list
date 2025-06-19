const button = document.querySelector('.btn-add');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.task-list');

let minhaListaDeItens = []



function adicionarNovaTarefa() {
  minhaListaDeItens.push(input.value);

  input.value = ''

  mostrarTarefas()
}

function mostrarTarefas() {

  let novaLi = ''

  minhaListaDeItens.forEach(tarefa => {

    novaLi = novaLi + `

    <li class="task-item">
          <img src="img/checked.png" alt="check">
          <p>${tarefa}.</p>
          <img src="img/trash.png" alt="uncheck">
      </li>

      `
  })

  listaCompleta.innerHTML = novaLi
}


button.addEventListener('click', adicionarNovaTarefa)

