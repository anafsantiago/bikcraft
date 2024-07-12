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

//Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-interna-fotos img");
const galeriaContainer = document.querySelector(".bicicleta-interna-fotos");

/** @param {MouseEvent} event */
function trocarImagem(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("(min-width: 1000px)").matches; //Verifica se o tamanho da tela é de mais de 1000 px. matchMedia() verifica o tamanho da tela
  if (media) {
    //Só faz essa mudança se a tela for maior do que 1000px
    galeriaContainer.prepend(img); //Troca a posição da img clicada para ser a primeira da lista, que é a maior
  }
}

function clicarImagens(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(clicarImagens);

//Iniciando a classe do plugin de animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
