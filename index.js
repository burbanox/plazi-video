
  let onCuadro = false;

  const cuadro = document.getElementsByClassName("overscroll__box");
  const contenedorCuadro = document.getElementsByClassName(
    "overscroll__container"
  );

  for (let i = 0; i < cuadro.length; i++) {
    cuadro[i].addEventListener("mouseenter", verdadero);
  }

  for (let i = 0; i < cuadro.length; i++) {
    cuadro[i].addEventListener("mouseleave", falso);
  }

  function verdadero() {
    onCuadro = true;
  }

  function falso() {
    console.log("onCuadro = false");
    onCuadro = false;
  }

  for (let i = 0; i < contenedorCuadro.length; i++) {
    contenedorCuadro[i].addEventListener("mouseover", accionContenedor);
  }

  function accionContenedor(e)
  {
    if (!onCuadro) {
      
    } else {
      console.log(this);
      this.classList.add("hover")
    } 
  }

