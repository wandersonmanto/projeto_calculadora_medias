const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festajando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

let linhas = '';
let notas = [];
let atividades = [];

let notaMinima = parseFloat(prompt("Digite a nota mínima:"))

form.addEventListener('submit', function(e){
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  notaMedia();
  mediaFinal();

});

function adicionaLinha() {
  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotaAtividade = document.getElementById('nota-atividade');

  if(atividades.includes(inputNomeAtividade.value)){
    alert(`Error: a atividade ${inputNomeAtividade.value} já existe!`)

  } else {
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    notas.push(parseFloat(inputNotaAtividade.value));
    atividades.push(inputNomeAtividade.value)

  }

  inputNomeAtividade.value = '';
  inputNotaAtividade.value = '';

}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function mediaFinal(){
  const textMediaFinal = document.getElementById('media-final-valor');
  mediaFinalValor = notaMedia();

  textMediaFinal.innerHTML = mediaFinalValor.toFixed(1);
  document.getElementById('media-final-resultado').innerHTML = mediaFinalValor >= notaMinima ? spanAprovado : spanReprovado;
}

function notaMedia() {
  media = 0;
  totalNotas = 0;
  for(let i = 0; i < notas.length; i++) {
    totalNotas += notas[i];
    
  }
  media = totalNotas / notas.length;
  return media;
}