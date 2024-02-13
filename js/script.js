// Ativa links do Menu

const links = document.querySelectorAll(".header-menu a");

function ativar_link(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativar_link);

// Ativar intens do orçament0

const parametros = new URLSearchParams(location.search);

function ativar_produto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
    console.log(elemento);
  }
}
parametros.forEach(ativar_produto);

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativar_pergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
  console.log(ativa);
}

function eventos_pergunta(pergunta) {
  pergunta.addEventListener("click", ativar_pergunta);
}

perguntas.forEach(eventos_pergunta);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-img img");
const galeria_container = document.querySelector(".bicicleta-img");

function trocar_img(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  console.log(media);
  if (media)
  galeria_container.prepend(img);
  console.log(img);
}

function eventos_galeria(img) {
  img.addEventListener("click", trocar_img);
}

galeria.forEach(eventos_galeria);

// Animação 
if (window.SimpleAnime) {
  new SimpleAnime();
}
