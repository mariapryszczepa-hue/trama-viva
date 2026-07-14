const elementosAnimados = document.querySelectorAll(
  ".about .split, .frase-content, .galeria .eyebrow, .galeria h2, .columna, .artesanas .eyebrow, .artesanas h2, .person, .cta .container, .catalogo-intro, .producto-card"
);

elementosAnimados.forEach(elemento => {
  elemento.classList.add("animar");
});

const columnas = document.querySelectorAll(".columna");

columnas.forEach((columna, indice) => {
  columna.style.transitionDelay = `${indice * 0.15}s`;
});

const personas = document.querySelectorAll(".person");

personas.forEach((persona, indice) => {
  persona.style.transitionDelay = `${indice * 0.15}s`;
});

const productos = document.querySelectorAll(".producto-card");

productos.forEach((producto, indice) => {
  producto.style.transitionDelay = `${(indice % 4) * 0.15}s`;
});

const observador = new IntersectionObserver((entradas) => {

  entradas.forEach(entrada => {

    if(entrada.isIntersecting){
      entrada.target.classList.add("visible");
    } else {
      entrada.target.classList.remove("visible");
    }

  });

}, {
  threshold: 0.15
});

elementosAnimados.forEach(elemento => {
  observador.observe(elemento);
});