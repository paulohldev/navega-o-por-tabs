function navTab() {
  let textos = document.querySelectorAll(".textos div");
  let titulos = document.querySelectorAll(".titulos h3");
  textos[0].classList.add("ativo");
  titulos[0].classList.add("ativo");

  function ativarTab(index) {
    textos.forEach((item) => {
      item.classList.remove("ativo");
    });
    textos[index].classList.add("ativo");
  }

  titulos.forEach((item, index) => {
    item.addEventListener("click", () => {
      titulos.forEach((item) => {
        item.classList.remove("ativo");
      });
      item.classList.add("ativo");
      ativarTab(index);
    });
  });
}
navTab();
