function addTarefa() {
  const diaSemanaElement = document.querySelector("#diaSemana").value;
  const horaElement = document.querySelector("#inHora").value;
  const tarefaElement = document.querySelector("#inTarefa").value;
  const dataElement = document.querySelector("#inData").value;

  adicionarTarefaNaTabela(
    diaSemanaElement,
    horaElement,
    tarefaElement,
    dataElement
  );

  document.querySelector("#diaSemana").value = "";
  document.querySelector("#inHora").value = "";
  document.querySelector("#inTarefa").value = "";
  document.querySelector("#inData").value = "";
}

function adicionarTarefaNaTabela(diaSemana, hora, tarefa, data) {
  const tabelaTarefas = document.querySelector("table tbody");

  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
    <td>${diaSemana}</td>
    <td>${hora}</td>
    <td>${tarefa}</td>
    <td>${data}</td>
    <td><button onclick="removerTarefa(this)">Remover tarefa</button></td>
  `;

  tabelaTarefas.appendChild(novaLinha);
}

function removerTarefa(botao) {
  const linhaTarefa = botao.parentNode.parentNode;
  linhaTarefa.remove();
}
