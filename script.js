const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicadores button");
const botaoAnterior = document.querySelector(".anterior");
const botaoProximo = document.querySelector(".proximo");
const linksInternos = document.querySelectorAll("a[href^='#']");

let slideAtual = 0;

function mostrarSlide(numero) {
  slides[slideAtual].classList.remove("ativo");
  indicadores[slideAtual].classList.remove("ativo");

  slideAtual = numero;

  if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  }

  if (slideAtual >= slides.length) {
    slideAtual = 0;
  }

  slides[slideAtual].classList.add("ativo");
  indicadores[slideAtual].classList.add("ativo");
}

function mostrarSlidePeloId(idDoSlide) {
  const indiceEncontrado = Array.from(slides).findIndex((slide) => {
    return slide.id === idDoSlide;
  });

  if (indiceEncontrado !== -1) {
    mostrarSlide(indiceEncontrado);
  }
}

botaoAnterior.addEventListener("click", () => {
  mostrarSlide(slideAtual - 1);
});

botaoProximo.addEventListener("click", () => {
  mostrarSlide(slideAtual + 1);
});

indicadores.forEach((indicador, indice) => {
  indicador.addEventListener("click", () => {
    mostrarSlide(indice);
  });
});

linksInternos.forEach((link) => {
  link.addEventListener("click", () => {
    const idDoSlide = link.getAttribute("href").replace("#", "");
    mostrarSlidePeloId(idDoSlide);
  });
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "ArrowLeft") {
    mostrarSlide(slideAtual - 1);
  }

  if (evento.key === "ArrowRight") {
    mostrarSlide(slideAtual + 1);
  }
});

if (window.location.hash) {
  mostrarSlidePeloId(window.location.hash.replace("#", ""));
}
