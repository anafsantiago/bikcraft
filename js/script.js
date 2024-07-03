// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;

  if (url.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search); // Seleciona os parâmetros que estão na URL. Retorna um array de parâmetros

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  elemento.checked = true;
}

parametros.forEach(ativarProduto);

// Ativar perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas-lista button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls"); //Pegar o valor de aria-controls
  const resposta = document.getElementById(controls); //Pegar o dd que tem o mesmo id que o aria-controls do button
  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativo); //Altera o aria-expanded para true ou false, dependendo da resposta estar ativa ou não
}

function clicarPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(clicarPergunta);
